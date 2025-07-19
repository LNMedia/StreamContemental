module.exports = {
  "moduleMeta": {
      "id": "song_request_module",
      "version": "0.0.1",
      "name": "Song Request Module",
      "authors": [ 
          { "name": "Andreas Reimann", "email": "business@areimann.de", "website": "https://areimann.de" } 
      ],
      "resources": {
          "stylesheets": ["/modules/package_3_audio_modules/assets/styles/song_request_styles.css"],
          "scripts": ["/modules/package_3_audio_modules/assets/scripts/song_request_scripts.js"],
          "icon": "fa-solid fa-circle-play",
          "devider": "",
          "background": "blue"
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
          "packageorder": 3,
          "moduleorder": 2
      },
      "settings": {
          "packagemanager": true,
          "enabled": true
      },
      "type": "module"
  },
  "moduleLanguage": {
    "song_request_module": {
      "de": "Songwünsche",
      "en": "Song Requests"
    }
  },
  "moduleContent": [
      "<h1 data-lang='song_request_module'></h1>"
    ]
};