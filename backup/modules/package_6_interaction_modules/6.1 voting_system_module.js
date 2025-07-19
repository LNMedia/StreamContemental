module.exports = {
  "moduleMeta": {
    "id": "voting_system_module",
    "version": "0.0.1",
    "name": "Voting System Module",
    "authors": [
      {
        "name": "Andreas Reimann",
        "email": "business@areimann.de",
        "website": "https://areimann.de"
      }
    ],
    "resources": {
      "stylesheets": [
        "/modules/package_6_interaction_modules/assets/styles/voting_system_styles.css"
      ],
      "scripts": [
        "/modules/package_6_interaction_modules/assets/scripts/voting_system_scripts.js"
      ],
      "icon": "fa-solid fa-vote-yea",
      "devider": "fa-solid fa-handshake-angle",
      "background": "orange"
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
      "packageorder": 6,
      "moduleorder": 1
    },
    "settings": {
      "packagemanager": true,
      "enabled": true
    },
    "type": "module"
  },
  "moduleLanguage": {
    "voting_system_module": {
      "de": "Abstimmungen",
      "en": "Voting System"
    }
  },
  "moduleContent": [
      "<h1 data-lang='voting_system_module'></h1>"
    ]
};