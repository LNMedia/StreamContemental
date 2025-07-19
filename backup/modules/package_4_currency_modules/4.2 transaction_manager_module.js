module.exports = {
  "moduleMeta": {
    "id": "transaction_manager_module",
    "version": "0.0.1",
    "name": "Transaction Manager Module",
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
        "/modules/package_4_currency_modules/assets/styles/transaction_manager_styles.css"
      ],
      "scripts": [
        "/modules/package_4_currency_modules/assets/scripts/transaction_manager_scripts.js"
      ],
      "icon": "fa-solid fa-receipt",
      "devider": "",
      "background": "yellow"
    },
    "dependencies": {
      "modules": [
        "currency_system_module"
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
      "moduleorder": 2
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
    "transaction_manager_module": {
      "de": "Transaktionsmanager",
      "en": "Transaction Manager"
    }
  },
  "moduleContent": [
    "<h1 data-lang='transaction_manager_module'></h1>"
  ]
};