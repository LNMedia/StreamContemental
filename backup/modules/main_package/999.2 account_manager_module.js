module.exports = {
    "moduleMeta": {
        "id": "account_manager_module",
        "version": "0.0.1",
        "name": "Account Manager Module",
        "authors": [ 
            { "name": "Andreas Reimann", "email": "business@areimann.de", "website": "https://areimann.de" } 
        ],
        "resources": {
            "stylesheets": ["/modules/main_package/assets/styles/account_manager_styles.css"],
            "scripts": ["/modules/main_package/assets/scripts/account_manager_scripts.js"],
            "icon": "fa-solid fa-user",
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
            "moduleorder": 2
        },
        "settings": {
            "packagemanager": false,
            "enabled": true
        },
        "type": "module"
    },
    "moduleLanguage": {
        "account_manager_module": {
            "de": "Account Einstellungen",
            "en": "Account Settings"
        }
    },
    "moduleContent": [
        "<h1 data-lang='account_manager_module'></h1>"
    ]
};