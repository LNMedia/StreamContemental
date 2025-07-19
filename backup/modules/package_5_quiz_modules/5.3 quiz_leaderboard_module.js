module.exports = {
  "moduleMeta": {
    "id": "quiz_leaderboard_module",
    "version": "0.0.1",
    "name": "Quiz Leaderboard Module",
    "authors": [
      {
        "name": "Andreas Reimann",
        "email": "business@areimann.de",
        "website": "https://areimann.de"
      }
    ],
    "resources": {
      "stylesheets": [
        "/modules/package_5_quiz_modules/assets/styles/quiz_leaderboard_styles.css"
      ],
      "scripts": [
        "/modules/package_5_quiz_modules/assets/scripts/quiz_leaderboard_scripts.js"
      ],
      "icon": "fa-solid fa-medal",
      "devider": "",
      "background": "purple"
    },
    "dependencies": {
      "modules": [
        "quiz_manager_module",
        "question_manager_module"
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
    "quiz_leaderboard_module": {
      "de": "Leaderboards",
      "en": "Leaderboards"
    }
  },
  "moduleContent": [
    "<h1 data-lang='quiz_leaderboard_module'></h1>"
  ]
};