module.exports = {
    "moduleMeta": {
        "id": "package_manager_module",
        "version": "0.0.1",
        "name": "Package Manager Module",
        "authors": [ 
            { "name": "Andreas Reimann", "email": "business@areimann.de", "website": "https://areimann.de" } 
        ],
        "resources": {
            "stylesheets": ["/modules/main_package/assets/styles/package_manager_styles.css"],
            "scripts": ["/modules/main_package/assets/scripts/package_manager_scripts.js"],
            "icon": "fa-solid fa-box-archive",
            "devider": "fa-solid fa-cog",
            "background": "red"
        },
        "dependencies": {
            "modules": [""],
            "external": {
                "api": {
                    "url": "",
                    "apiKey": ""
                }
            }
        },
        "sort": {
            "packageorder": 999,
            "moduleorder": 1
        },
        "settings": {
            "packagemanager": false,
            "enabled": true
        },
        "type": "module"
    },
    "moduleLanguage": {
        "no_package_manager": {
            "de": "Es sind keine Module installiert.",
            "en": "No modules installed."
        },
        "package_manager_module": {
            "de": "Modulverwaltung",
            "en": "Module Management"
        },
        "settings_module_module_import_button": {
            "de": "Module Importieren",
            "en": "Import Modules"
        },
        "settings_module_module_import_desc": {
            "de": "Hier kannst du Module importieren. Wähle eine ZIP-Datei aus, die das Modul enthält.",
            "en": "Here you can import modules. Select a ZIP file that contains the module."
        },
        "settings_module_module_import_input": {
            "de": "Wähle eine ZIP-Datei aus, die das Modul enthält.",
            "en": "Select a ZIP file that contains the module."
        },
        "settings_module_module_import_no_file": {
            "de": "Keine Datei ausgewählt",
            "en": "No file selected"
        },
        "settings_module_module_import_loading": {
            "de": "Lade...",
            "en": "Loading..."
        },
        "settings_module_module_import_success": {
            "de": "Erfolgreich importiert",
            "en": "Successfully imported"
        },
        "settings_module_module_import_error": {
            "de": "Fehler beim Importieren",
            "en": "Error importing"
        },
        "settings_module_module_import_invalid_file": {
            "de": "Ungültige Datei. Bitte wähle eine Datei mit dem Suffix '_modules.zip' aus.",
            "en": "Invalid file. Please select a file with the suffix '_modules.zip'."
        },
        "settings_module_module_import_missing_module_file": {
            "de": "Die ZIP-Datei enthält keine gültige Moduldatei.",
            "en": "The ZIP file does not contain a valid module file."
        },
        "settings_module_module_import_invalid_zip": {
            "de": "Ungültige ZIP-Datei.",
            "en": "Invalid ZIP file."
        },
        "moduledesc": {
            "de": "Modulbeschreibung: ",
            "en": "Module description: "
        },
        "packageversion": {
            "de": "Paketversion: ",
            "en": "Package version: "
        },
        "moduleversion": {
            "de": "Modulversion: ",
            "en": "Module version: "
        },
        "connectedpackages": {
            "de": "Verknüpfte Module: ",
            "en": "Connected modules: "
        }
    },
    "moduleContent": [
        "<h1 data-lang='package_manager_module'></h1>",
        "<button class='moduleImportButton' data-lang='settings_module_module_import_button'></button>",
        "<modal id='moduleImportModal' class='moduleImportModal'>",
        "   <div class='moduleImportModalContent'>",
        "       <span class='close'>&times;</span>",
        "       <h2 data-lang='settings_module_module_import_button'></h2>",
        "       <p data-lang='settings_module_module_import_desc'></p>",
        "       <label for='moduleImportFile' class='customFileUpload' data-lang='settings_module_module_import_input'></label>",
        "       <input type='file' id='moduleImportFile' accept='.zip' style='display: none; onchange='checkFileName(this)'>",
        "       <p id='selectedFileName' class='selectedFileName' data-lang='settings_module_module_import_no_file'></p>",
        "       <button id='moduleImportConfirmButton' class='moduleImportConfirmButton' data-lang='settings_module_module_import_button' disabled></button>",
        "   </div>",
        "</modal>",
        "<div class='moduleLoadingContainer'><span data-lang='settings_module_module_import_loading'></span></div>",
        "<div class='moduleSuccessContainer'><span data-lang='settings_module_module_import_success'></span></div>",
        "<div class='moduleErrorContainer'><span data-lang='settings_module_module_import_error'></span></div>",
        "<div class='moduleSettingsContainer'></div>"
    ]
};