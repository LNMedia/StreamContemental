const express = require('express');
const path = require('path');
const fs = require('fs');
const AdmZip = require('adm-zip');
const router = express.Router();

// Pfade definieren
const isDev = true;
const modulesDir = isDev
  ? path.join(__dirname, 'modules')
  : path.join(process.resourcesPath, 'modules');
const uploadsDir = isDev
  ? path.join(__dirname, 'uploads')
  : path.join(process.resourcesPath, 'uploads');
let modules = [];

// 🔥 Modul-Verwaltung / Paket-Verwaltung
function loadModules() {
    modules = [];
    readModulesRecursively(modulesDir);
}
function readModulesRecursively(dir) {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            // Wenn es ein Verzeichnis ist, suchen wir nach der manifest.json im Verzeichnis
            const manifestPath = path.join(fullPath, 'manifest.json');
            if (fs.existsSync(manifestPath)) {
                const manifest = loadManifest(manifestPath);
                if (manifest) {
                    readModuleFilesInDir(fullPath, manifest);
                } else {
                    console.warn(`Manifest konnte nicht geladen werden in: ${fullPath}`);
                }
            }
            // Rekursiver Aufruf für Unterverzeichnisse
            readModulesRecursively(fullPath);
        }
    }
}
function readModuleFilesInDir(dir, manifest) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isFile() && entry.name.endsWith('_module.js')) {
            try {
                const module = require(fullPath);
                if (module && module.moduleMeta && module.moduleLanguage && module.moduleContent) {
                    module.moduleMeta.packageinfo = manifest.packageinfo;
                    module.moduleMeta.packagesecurity = manifest.packagesecurity;

                    modules.push({
                        file: entry.name,
                        moduleMeta: module.moduleMeta,
                        moduleLanguage: module.moduleLanguage,
                        moduleContent: module.moduleContent,
                        loadModulePath: `/modules/${path.relative(modulesDir, fullPath).replace(/\\/g, '/')}`
                    });
                } else {
                    console.warn(`Ungültige Metadaten in Modul: ${fullPath}`);
                }
            } catch (err) {
                console.error(`Fehler beim Laden von ${fullPath}:`, err);
            }
        }
    }
}
function loadManifest(manifestPath) {
    try {
        const data = fs.readFileSync(manifestPath, 'utf-8');
        return JSON.parse(data);
    } catch (err) {
        console.error(`Fehler beim Laden des Manifests: ${manifestPath}`, err);
        return null;
    }
}
// Initiales Laden
loadModules();
// 📦 API Endpunkte
router.get('/modules', (req, res) => {
    res.json(modules);
});
router.post('/modules/import', async (req, res) => {
    const file = req.files?.moduleFile;
    if (!file) return res.status(400).json({ success: false, message: 'Keine Datei ausgewählt.' });

    const tempPath = path.join(uploadsDir, file.name);
    fs.mkdirSync(uploadsDir, { recursive: true });

    file.mv(tempPath, err => {
        if (err) return res.status(500).json({ success: false, message: 'Fehler beim Speichern der Datei.' });

        try {
            const zip = new AdmZip(tempPath);
            const manifestEntry = zip.getEntries().find(e => e.entryName.toLowerCase() === 'manifest.json');

            if (!manifestEntry) return cleanupAndRespond(res, tempPath, 400);

            const manifest = JSON.parse(manifestEntry.getData().toString('utf8'));
            if (manifest.packageinfo.type !== 'package' && manifest.packageinfo.authors.includes(manifest.packageinfo.authors.name === 'Andreas Reimann')) {
                return cleanupAndRespond(res, tempPath, 400);
            }

            const extractPath = path.join(modulesDir, path.parse(file.name).name);

            if (fs.existsSync(extractPath)) {
                fs.rmSync(extractPath, { recursive: true, force: true });
            }

            fs.mkdirSync(extractPath, { recursive: true });
            zip.extractAllTo(extractPath, true);

            cleanupTempFiles(tempPath);
            loadModules();

            res.json({ success: true, message: 'Modul erfolgreich importiert und geladen.' });
        } catch (error) {
            console.error('Fehler beim Entpacken oder Verarbeiten:', error);
            cleanupTempFiles(tempPath);
            res.status(500).json({ success: false, message: 'Fehler beim Entpacken oder Verarbeiten.' });
        }
    });
});
router.post('/modules/update-enabled', (req, res) => {
    const { packagenumber, order, enabled } = req.body;

    if (typeof packagenumber !== 'number' || typeof order !== 'number' || typeof enabled !== 'boolean') {
        return res.status(400).json({ success: false });
    }

    const module = modules.find(m => m.moduleMeta.sort.packageorder === packagenumber && m.moduleMeta.sort.moduleorder === order);

    if (!module) {
        return res.status(404).json({ success: false });
    }
    module.moduleMeta.settings.enabled = enabled;
    console.log(`Modul "${module.moduleMeta.name}" wurde ${enabled ? 'aktiviert' : 'deaktiviert'}.`);

    try {
        saveModuleFile(module.loadModulePath, module);
        modules.forEach(m => {
            if (
                m.moduleMeta.sort.packageorder === packagenumber &&
                m.moduleMeta.dependencies.modules.includes(module.moduleMeta.id) &&
                m.moduleMeta.settings.enabled !== enabled
            ) {
                m.moduleMeta.settings.enabled = enabled;
                saveModuleFile(m.loadModulePath, m);
            }
        });
        loadModules();
        res.json({
            success: true,
            moduleMeta: module.moduleMeta
        });
    } catch (error) {
        console.error('Fehler beim Speichern:', error);
        res.status(500).json({ success: false, message: 'Fehler beim Speichern des Moduls.' });
    }
    
});
function saveModuleFile(relativePath, moduleObj) {
    const fullPath = path.join(__dirname, relativePath.replace('/modules/', 'modules/'));
    const content = `module.exports = ${JSON.stringify({
        moduleMeta: moduleObj.moduleMeta,
        moduleLanguage: moduleObj.moduleLanguage,
        moduleContent: moduleObj.moduleContent
    }, null, 2)};`;
    fs.writeFileSync(fullPath, content, 'utf8');
}
function cleanupAndRespond(res, tempPath, statusCode = 400) {
    cleanupTempFiles(tempPath);
    res.status(statusCode).json({ success: false });
}
function cleanupTempFiles(tempPath) {
    if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
    if (fs.existsSync(uploadsDir)) fs.rmSync(uploadsDir, { recursive: true, force: true });
}



// DO NOT TOUCH
module.exports = router;