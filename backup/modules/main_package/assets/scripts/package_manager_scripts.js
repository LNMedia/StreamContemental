function loadModuleSettings() {
    const moduleSettingsContainer = document.querySelector('.moduleSettingsContainer');
    moduleSettingsContainer.innerHTML = "";

    let hasPackageManager = false;

    modules.sort((a, b) => {
        const packageA = a.moduleMeta.sort.packageorder || '';
        const packageB = b.moduleMeta.sort.packageorder || '';
        if (packageA < packageB) return -1;
        if (packageA > packageB) return 1;
    
        const orderA = a.moduleMeta.sort.moduleorder ?? 999;
        const orderB = b.moduleMeta.sort.moduleorder ?? 999;
        return orderA - orderB;
    });

    let currentPackageName = null;
    let dividerHTML = null;

    modules.forEach((module, index) => {
        if (module.moduleMeta.name !== currentPackageName && module.moduleMeta.settings.packagemanager === true) {
            currentPackageName = module.moduleMeta.name;
            if (module.moduleMeta.resources.devider) {
                dividerHTML = ` 
                    <div class="navDevider">
                        <span class="line"></span>
                        <span><i class="${module.moduleMeta.resources.devider}"></i></span>
                        <span class="line"></span>
                    </div>
                `;
                moduleSettingsContainer.innerHTML += dividerHTML;
            }
        }

        let dependenciesHTML = '';
        if (Array.isArray(module.moduleMeta.dependencies.modules) && module.moduleMeta.dependencies.modules.length > 0) {
            dependenciesHTML = `
                <div>
                    <p data-lang="connectedpackages"></p>
                    <ul id="module-dependencies-${index}" class="module-dependencies-list"></ul>
                </div>
            `;
        }
        
        const moduleSettingsCard = document.createElement('div');
        moduleSettingsCard.classList.add('moduleSettingsCard');
        moduleSettingsCard.innerHTML = `
            <div style="background:${module.moduleMeta.resources.background}" class="moduleSettingsCardImage">
                <div class="moduleSettingsCardHeader">
                    <div class="${module.moduleMeta.resources.icon} ${module.moduleMeta.settings.enabled}"></div>
                    <h2 data-lang='${module.moduleMeta.id}'></h2>
                </div>
            </div>
            <div class="moduleSettingsCardContent">
                <div class="moduleSettingsCardDetails">
                    <div><p data-lang="moduledesc"></p><p data-lang='${module.moduleMeta.description}'></p></div>
                    <div><p data-lang="packageversion"></p><p>${module.moduleMeta.packageinfo.version}</p></div>
                    <div><p data-lang="moduleversion"></p><p>${module.moduleMeta.version}</p></div>
                    ${dependenciesHTML}
                </div>
                <label class="toggleModuleSwitch">
                    <input type="checkbox" class="enabled-toggle" id="enabled-toggle-${index}" ${module.moduleMeta.settings.enabled ? 'checked' : ''} data-index="${index}" onclick="updateModuleEnabled(this)">
                    <span class="toggleModuleSlider"></span>
                </label>
            </div>
        `;
        
        const depsList = moduleSettingsCard.querySelector(`#module-dependencies-${index}`);
        if (Array.isArray(module.moduleMeta.dependencies.modules)) {
            module.moduleMeta.dependencies.modules.forEach(dep => {
                const li = document.createElement("li");
                li.setAttribute("data-lang", dep);
                li.textContent = dep;
                depsList.appendChild(li);
            });
        }

        // Sprach-Text setzen
        moduleSettingsCard.querySelectorAll('[data-lang]').forEach(el => {
            const key = el.getAttribute('data-lang');
            const text = getLanguageText(key);
            el.innerText = text;
        });

        // Überprüfen, ob packagemanager auf true gesetzt ist
        if (module.moduleMeta.settings.packagemanager === true) {
            hasPackageManager = true;
            moduleSettingsContainer.appendChild(moduleSettingsCard);
        }
    });

    if (!hasPackageManager) {
        moduleSettingsContainer.innerHTML = `
            <p data-lang='no_package_manager' style="color: var(--foreground-node); font-family:'Orbitron'; font-size: 1.3rem; position: relative;"></p>
        `;
        moduleSettingsContainer.querySelectorAll('[data-lang]').forEach(el => {
            const key = el.getAttribute('data-lang');
            const text = getLanguageText(key);
            el.innerText = text;
        });
    }
}
function updateModuleEnabled(checkbox) {
    const isEnabled = checkbox.checked;
    const moduleIndex = checkbox.getAttribute('data-index');
    const module = modules[moduleIndex];
    
    console.log(`Switch geändert für Modul ${module.moduleMeta.name}: ${isEnabled ? 'aktiviert' : 'deaktiviert'}`);

    updateModuleStatus(module, isEnabled);
}
function updateModuleStatus(module, enabled) {
    const packagenumber = module.moduleMeta.sort.packageorder;
    const order = module.moduleMeta.sort.moduleorder;

    fetch('/api/modules/update-enabled', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            packagenumber,
            order,
            enabled
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            console.log(`Modul erfolgreich ${enabled ? 'aktiviert' : 'deaktiviert'}`);
            location.reload();
        } else {
            console.error('Fehler beim Aktivieren/Deaktivieren des Moduls:', data.message);
        }
    })
    .catch(error => {
        console.error('Fehler beim Senden der Anfrage:', error);
    });
}

(function() {
    const moduleImportFileInput = document.getElementById('moduleImportFile');
    const selectedFileName = document.getElementById('selectedFileName');
    moduleImportFileInput.addEventListener('change', async () => {
        if (moduleImportFileInput.files.length > 0) {
            const file = moduleImportFileInput.files[0];

            if (file.name.endsWith('_modules.zip')) {
                try {
                    const zip = await JSZip.loadAsync(file);
                    const fileNames = Object.keys(zip.files);

                    const hasModuleFile = fileNames.some(zipFile => zipFile.endsWith('_module.js'));

                    if (hasModuleFile) {
                        selectedFileName.textContent = file.name;
                        moduleImportConfirmButton.disabled = false;
                    } else {
                        selectedFileName.textContent = getLanguageText('settings_module_module_import_missing_module_file');
                        moduleImportConfirmButton.disabled = true;
                        moduleImportFileInput.value = '';
                    }
                } catch (err) {
                    console.error('Fehler beim Lesen der ZIP-Datei:', err);
                    selectedFileName.textContent = getLanguageText('settings_module_module_import_invalid_zip');
                    moduleImportConfirmButton.disabled = true;
                    moduleImportFileInput.value = '';
                }
            } else {
                selectedFileName.textContent = getLanguageText('settings_module_module_import_invalid_file');
                moduleImportConfirmButton.disabled = true;
                moduleImportFileInput.value = '';
            }
        } else {
            selectedFileName.textContent = getLanguageText('settings_module_module_import_no_file');
            moduleImportConfirmButton.disabled = true;
        }
    });
    const moduleImportButton = document.querySelector('.moduleImportButton');
    moduleImportButton.addEventListener('click', () => {
        const modal = document.getElementById('moduleImportModal');
        modal.style.display = "flex";
    });
    const closeModal = document.querySelector('.close');
    closeModal.addEventListener('click', () => {
        const modal = document.getElementById('moduleImportModal');
        modal.style.display = "none";
    });
    document.addEventListener('click', (event) => {
        const modal = document.getElementById('moduleImportModal');
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
    const moduleImportConfirmButton = document.getElementById('moduleImportConfirmButton');
    moduleImportConfirmButton.addEventListener('click', () => {
        const file = moduleImportFileInput.files[0];
        const moduleLoadingContainer = document.querySelector('.moduleLoadingContainer');
        const moduleSuccessContainer = document.querySelector('.moduleSuccessContainer');
        const moduleErrorContainer = document.querySelector('.moduleErrorContainer');
        moduleLoadingContainer.style.display = "flex";
        if (file) {
            const formData = new FormData();
            formData.append('moduleFile', file);


            fetch('/api/modules/import', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    moduleLoadingContainer.style.display = "none";
                    moduleSuccessContainer.style.display = "flex";
                    setTimeout (() => {
                        location.reload();
                    }, 3000);
                    
                } else {
                    alert('Error' + data.message);
                    moduleLoadingContainer.style.display = "none";
                    moduleErrorContainer.style.display = "flex";
                    setTimeout (() => {
                        location.reload();
                    }, 3000);
                }
            })
            .catch(error => {
                console.error('Fehler:', error);
                alert('Error' + error);
            });
        }
    });
})();
loadModuleSettings();