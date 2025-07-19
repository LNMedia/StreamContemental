module.exports = {
  "moduleMeta": {
    "id": "stream_manager_module",
    "version": "0.0.1",
    "name": "Stream Manager Module",
    "description": "stream_manager_module_description",
    "authors": [
      {
        "name": "Andreas Reimann",
        "email": "business@areimann.de",
        "website": "https://areimann.de"
      }
    ],
    "resources": {
      "stylesheets": [
        "/modules/package_1_stream_modules/assets/styles/stream_manager_styles.css"
      ],
      "scripts": [
        "/modules/package_1_stream_modules/assets/scripts/stream_manager_scripts.js"
      ],
      "icon": "fa-solid fa-camera",
      "devider": "fa-solid fa-video",
      "background": "red"
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
      "packageorder": 1,
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
      "id": 1,
      "packagename": "Stream Package",
      "version": "0.0.1-alpha",
      "resources": {
        "modulespath": "/modules/package_1_stream_modules",
        "assetspath": "/modules/package_1_stream_modules/assets",
        "mediapath": "/modules/package_1_stream_modules/assets/media",
        "datapath": "/modules/package_1_stream_modules/assets/data"
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
    "stream_manager_module": {
      "de": "Stream Manager",
      "en": "Stream Manager"
    },
    "stream_manager_module_description": {
      "de": "Modul zur Verwaltung von Streams",
      "en": "Module for managing streams"
    }
  },
  "moduleContent": [
    "<h1 data-lang='stream_manager_module'></h1>"
  ]
};