module.exports = {
  "moduleMeta": {
    "id": "alert_system_module",
    "version": "0.0.1",
    "name": "Alert System Module",
    "authors": [
      {
        "name": "Andreas Reimann",
        "email": "business@areimann.de",
        "website": "https://areimann.de"
      }
    ],
    "resources": {
      "stylesheets": [
        "/modules/package_1_stream_modules/assets/styles/alert_system_styles.css"
      ],
      "scripts": [
        "/modules/package_1_stream_modules/assets/scripts/alert_system_scripts.js"
      ],
      "icon": "fa-solid fa-bell",
      "devider": "",
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
      "moduleorder": 3
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
    "alert_system_module": {
      "de": "Alarm System",
      "en": "Alert System"
    }
  },
  "moduleContent": [
    "<h1 data-lang='alert_system_module'></h1>"
  ]
};