module.exports = {
    "moduleMeta": {
        "id": "permission_manager_module",
        "version": "0.0.1",
        "name": "Permission Manager Module",
        "authors": [ 
            { "name": "Andreas Reimann", "email": "business@areimann.de", "website": "https://areimann.de" } 
        ],
        "resources": {
            "stylesheets": ["/modules/main_package/assets/styles/permission_manager_styles.css"],
            "scripts": ["/modules/main_package/assets/scripts/permission_manager_scripts.js"],
            "icon": "fa-solid fa-user-shield",
            "devider": "",
            "background": "blue"
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
            "moduleorder": 5
        },
        "settings": {
            "packagemanager": false,
            "enabled": true
        },
        "type": "module"
    },
    "moduleLanguage": {
        "permission_manager_module": {
            "de": "Berechtigungen",
            "en": "Permission Manager"
        }
    },
    "moduleContent": [
        "<h1 data-lang='permission_manager_module'></h1>"
    ]
};