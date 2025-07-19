module.exports = {
    "moduleMeta": {
        "id": "hotkey_manager_module",
        "version": "0.0.1",
        "name": "Hotkey Manager Module",
        "authors": [ 
            { "name": "Andreas Reimann", "email": "business@areimann.de", "website": "https://areimann.de" } 
        ],
        "resources": {
            "stylesheets": ["/modules/main_package/assets/styles/hotkey_manager_styles.css"],
            "scripts": ["/modules/main_package/assets/scripts/hotkey_manager_scripts.js"],
            "icon": "fa-solid fa-keyboard",
            "devider": "",
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
            "moduleorder": 4
        },
        "settings": {
            "packagemanager": false,
            "enabled": true
        },
        "type": "module"
    },
    "moduleLanguage": {
        "hotkey_manager_module": {
            "de": "Hotkey Einstellungen",
            "en": "Hotkey Settings"
        }
    },
    "moduleContent": [
        "<h1 data-lang='hotkey_manager_module'></h1>"
    ]
};