module.exports = {
  "moduleMeta": {
    "id": "quiz_manager_module",
    "version": "0.0.1",
    "name": "Quiz Manager Module",
    "authors": [
      {
        "name": "Andreas Reimann",
        "email": "business@areimann.de",
        "website": "https://areimann.de"
      }
    ],
    "resources": {
      "stylesheets": [
        "/modules/package_5_quiz_modules/assets/styles/quiz_manager_styles.css"
      ],
      "scripts": [
        "/modules/package_5_quiz_modules/assets/scripts/quiz_manager_scripts.js"
      ],
      "icon": "fa-solid fa-graduation-cap",
      "devider": "fa-solid fa-user-graduate",
      "background": "purple"
    },
    "dependencies": {
      "modules": [
        "question_manager_module",
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
    "quiz_manager_module": {
      "de": "Quiz Manager",
      "en": "Quiz Manager"
    }
  },
  "moduleContent": [
    "<h1 data-lang='quiz_manager_module'></h1>"
  ]
};