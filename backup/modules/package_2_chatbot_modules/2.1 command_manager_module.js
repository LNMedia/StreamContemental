module.exports = {
  "moduleMeta": {
    "id": "command_manager_module",
    "version": "0.0.1",
    "name": "Command Manager Module",
    "authors": [
      {
        "name": "Andreas Reimann",
        "email": "business@areimann.de",
        "website": "https://areimann.de"
      }
    ],
    "resources": {
      "stylesheets": [
        "/modules/package_2_chatbot_modules/assets/styles/command_manager_styles.css"
      ],
      "scripts": [
        "/modules/package_2_chatbot_modules/assets/scripts/command_manager_scripts.js"
      ],
      "icon": "fa-solid fa-book",
      "devider": "fa-solid fa-robot",
      "background": "green"
    },
    "dependencies": {
      "modules": [],
      "external": {
        "api": {
          "url": "",
          "apiKey": ""
        }
      }
    },
    "sort": {
      "packageorder": 2,
      "moduleorder": 1
    },
    "settings": {
      "packagemanager": true,
      "enabled": true
    },
    "type": "module",
    "packageinfo": {
      "authors": [
        {
          "name": "Andreas Reimann",
          "email": "business@areimann.de",
          "website": "https://areimann.de"
        }
      ],
      "id": 0,
      "packagename": "Chatbot Package",
      "version": "0.0.1-alpha",
      "resources": {
        "modulespath": "/modules/package_2_chatbot_modules",
        "assetspath": "/modules/package_2_chatbot_modules/assets",
        "mediapath": "/modules/package_2_chatbot_modules/assets/media",
        "datapath": "/modules/package_2_chatbot_modules/assets/data"
      },
      "type": "package"
    },
    "packagesecurity": {
      "enabled": true,
      "hash": "sha256",
      "key": "",
      "iv": "",
      "salt": ""
    }
  },
  "moduleLanguage": {
    "command_manager_module": {
      "de": "Chatbot Befehle",
      "en": "Chatbot Commands"
    }
  },
  "moduleContent": [
    "<h1 data-lang='command_manager_module'></h1>"
  ]
};