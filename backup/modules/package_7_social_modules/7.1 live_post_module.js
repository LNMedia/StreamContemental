module.exports = {
  "moduleMeta": {
    "id": "live_post_module",
    "version": "0.0.1",
    "name": "Live Posting Module",
    "authors": [
      {
        "name": "Andreas Reimann",
        "email": "business@areimann.de",
        "website": "https://areimann.de"
      }
    ],
    "resources": {
      "stylesheets": [
        "/modules/package_7_social_modules/assets/styles/live_post_styles.css"
      ],
      "scripts": [
        "/modules/package_7_social_modules/assets/scripts/live_post_scripts.js"
      ],
      "icon": "fa-solid fa-share",
      "devider": "fa-solid fa-user-group",
      "background": "brown"
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
      "packageorder": 7,
      "moduleorder": 1
    },
    "settings": {
      "packagemanager": true,
      "enabled": true
    },
    "type": "module"
  },
  "moduleLanguage": {
    "live_post_module": {
      "de": "Live Post",
      "en": "Live Post"
    }
  },
  "moduleContent": [
      "<h1 data-lang='live_post_module'></h1>"
    ]
};