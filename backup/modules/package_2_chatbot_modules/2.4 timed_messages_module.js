module.exports = {
  "moduleMeta": {
      "id": "timed_messages_module",
      "version": "0.0.1",
      "name": "Timed Messages Module",
      "authors": [ 
          { "name": "Andreas Reimann", "email": "business@areimann.de", "website": "https://areimann.de" } 
      ],
      "resources": {
          "stylesheets": ["/modules/package_2_chatbot_modules/assets/styles/timed_messages_styles.css"],
          "scripts": ["/modules/package_2_chatbot_modules/assets/scripts/timed_messages_scripts.js"],
          "icon": "fa-solid fa-clock",
          "devider": "",
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
          "moduleorder": 4
      },
      "settings": {
          "packagemanager": true,
          "enabled": true
      },
      "type": "module"
  },
  "moduleLanguage": {
    "timed_messages_module": {
      "de": "Zeitgesteuerte Nachrichten",
      "en": "Timed Messages"
    }
  },
  "moduleContent": [
      "<h1 data-lang='timed_messages_module'></h1>"
    ]
};