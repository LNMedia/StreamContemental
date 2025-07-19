module.exports = {
  "moduleMeta": {
      "id": "auto_response_module",
      "version": "0.0.1",
      "name": "Automatic Responses Module",
      "authors": [ 
          { "name": "Andreas Reimann", "email": "business@areimann.de", "website": "https://areimann.de" } 
      ],
      "resources": {
          "stylesheets": ["/modules/package_2_chatbot_modules/assets/styles/auto_response_styles.css"],
          "scripts": ["/modules/package_2_chatbot_modules/assets/scripts/auto_response_scripts.js"],
          "icon": "fa-solid fa-robot",
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
          "moduleorder": 3
      },
      "settings": {
          "packagemanager": true,
          "enabled": true
      },
      "type": "module"
  },
  "moduleLanguage": {
    "auto_response_module": {
      "de": "automatische Antwort",
      "en": "Auto Response"
    }
  },
  "moduleContent": [
      "<h1 data-lang='auto_response_module'></h1>"
    ]
};