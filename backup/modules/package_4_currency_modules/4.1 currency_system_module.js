module.exports = {
  "moduleMeta": {
    "id": "currency_system_module",
    "version": "0.0.1",
    "name": "Currency System Module",
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
        "/modules/package_4_currency_modules/assets/styles/currency_system_styles.css"
      ],
      "scripts": [
        "/modules/package_4_currency_modules/assets/scripts/currency_system_scripts.js"
      ],
      "icon": "fa-solid fa-dollar-sign",
      "devider": "fa-solid fa-coins",
      "background": "yellow"
    },
    "dependencies": {
      "modules": [
        "transaction_manager_module"
      ],
      "external": {
        "api": {
          "url": "",
          "apiKey": ""
        }
      }
    },
    "sort": {
      "packageorder": 4,
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
      "packagename": "Currency System Package",
      "version": "0.0.1-alpha",
      "resources": {
        "modulespath": "/modules/package_4_currency_modules",
        "assetspath": "/modules/package_4_currency_modules/assets",
        "mediapath": "/modules/package_4_currency_modules/assets/media",
        "datapath": "/modules/package_4_currency_modules/assets/data"
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
    "currency_system_module": {
      "de": "Währungssystem",
      "en": "Economy Management"
    }
  },
  "moduleContent": [
    "<h1 data-lang='currency_system_module'></h1>"
  ]
};