module.exports = {
    "moduleMeta":{
        "id": "websocket_manager_module",
        "version": "0.0.1",
        "name": "Websocket Manager Module",
        "authors": [ 
            { "name": "Andreas Reimann", "email": "business@areimann.de", "website": "https://areimann.de" } 
        ],
        "resources": {
            "stylesheets": ["/modules/main_package/assets/styles/websocket_manager_styles.css"],
            "scripts": ["/modules/main_package/assets/scripts/websocket_manager_scripts.js"],
            "icon": "fa-solid fa-wifi",
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
            "moduleorder": 3
        },
        "settings": {
            "packagemanager": false,
            "enabled": true
        },
        "type": "module"
    },
    "moduleLanguage": {
        "websocket_manager_module": {
            "de": "Websocket Einstellungen",
            "en": "Websocket Settings"
        }
    },
    "moduleContent": [
        "<h1 data-lang='websocket_manager_module'></h1>"
    ]
};