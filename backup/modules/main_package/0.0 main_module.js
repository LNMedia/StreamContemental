module.exports = {
    "moduleMeta": {
        "id": "main_module",
        "version": "0.0.1-dev",
        "name": "Home Module",
        "authors": [ 
            { "name": "Andreas Reimann", "email": "business@areimann.de", "website": "https://areimann.de" } 
        ],
        "resources": {
            "stylesheets": ["/modules/main_package/assets/styles/main_module_styles.css"],
            "scripts": ["/modules/main_package/assets/scripts/main_module_scripts.js"],
            "icon": "fa-solid fa-home",
            "devider": "",
            "background": "green"
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
            "packageorder": 0,
            "moduleorder": 0
        },
        "settings": {
            "packagemanager": false,
            "enabled": true
        },
        "type": "module"
    },
    "moduleLanguage": {
        "main_module": {
            "de": "Start",
            "en": "Home"
        },
        "main_module_home_title_2": {
            "de": "Startseite",
            "en": "Homepage"
        }
    },
    "moduleContent": [
      "<h1 data-lang='main_module_home_title_2'></h1>"
    ]
};