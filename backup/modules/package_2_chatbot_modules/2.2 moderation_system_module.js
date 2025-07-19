module.exports = {
  "moduleMeta": {
      "id": "moderation_system_module",
      "version": "0.0.1",
      "name": "Moderation System Module",
      "authors": [ 
          { "name": "Andreas Reimann", "email": "business@areimann.de", "website": "https://areimann.de" } 
      ],
      "resources": {
          "stylesheets": ["/modules/package_2_chatbot_modules/assets/styles/moderation_system_styles.css"],
          "scripts": ["/modules/package_2_chatbot_modules/assets/scripts/moderation_system_scripts.js"],
          "icon": "fa-solid fa-user-shield",
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
          "moduleorder": 2
      },
      "settings": {
          "packagemanager": true,
          "enabled": true
      },
      "type": "module"
  },
  "moduleLanguage": {
    "moderation_system_module": {
      "de": "Moderationssystem",
      "en": "Moderation System"
    }
  },
  "moduleContent": [
      "<h1 data-lang='moderation_system_module'></h1>"
    ]
};