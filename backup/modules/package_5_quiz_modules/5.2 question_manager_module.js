module.exports = {
  "moduleMeta": {
    "id": "question_manager_module",
    "version": "0.0.1",
    "name": "Question Manager Module",
    "authors": [
      {
        "name": "Andreas Reimann",
        "email": "business@areimann.de",
        "website": "https://areimann.de"
      }
    ],
    "resources": {
      "stylesheets": [
        "/modules/package_5_quiz_modules/assets/styles/question_manager_styles.css"
      ],
      "scripts": [
        "/modules/package_5_quiz_modules/assets/scripts/question_manager_scripts.js"
      ],
      "icon": "fa-solid fa-book",
      "devider": "",
      "background": "purple"
    },
    "dependencies": {
      "modules": [
        "quiz_manager_module",
        "quiz_leaderboard_module"
      ],
      "external": {
        "api": {
          "url": "",
          "apiKey": ""
        }
      }
    },
    "sort": {
      "packageorder": 5,
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
      "id": 5,
      "packagename": "Quiz Package",
      "version": "0.0.1-alpha",
      "resources": {
        "modulespath": "/modules/package_5_quiz_modules",
        "assetspath": "/modules/package_5_quiz_modules/assets",
        "mediapath": "/modules/package_5_quiz_modules/assets/media",
        "datapath": "/modules/package_5_quiz_modules/assets/data"
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
    "question_manager_module": {
      "de": "Fragenkatalog",
      "en": "Question Manager"
    }
  },
  "moduleContent": [
    "<h1 data-lang='question_manager_module'></h1>"
  ]
};