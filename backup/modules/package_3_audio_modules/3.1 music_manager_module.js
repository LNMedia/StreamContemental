module.exports = {
  "moduleMeta": {
    "id": "music_manager_module",
    "version": "0.0.1",
    "name": "Music Manager Module",
    "authors": [
      {
        "name": "Andreas Reimann",
        "email": "business@areimann.de",
        "website": "https://areimann.de"
      }
    ],
    "resources": {
      "stylesheets": [
        "/modules/package_3_audio_modules/assets/styles/music_manager_styles.css"
      ],
      "scripts": [
        "/modules/package_3_audio_modules/assets/scripts/music_manager_scripts.js"
      ],
      "icon": "fa-solid fa-music",
      "devider": "fa-solid fa-music",
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
      "id": 0,
      "packagename": "Audio Package",
      "version": "0.0.1-alpha",
      "resources": {
        "modulespath": "/modules/package_3_audio_modules",
        "assetspath": "/modules/package_3_audio_modules/assets",
        "mediapath": "/modules/package_3_audio_modules/assets/media",
        "datapath": "/modules/package_3_audio_modules/assets/data"
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
    "music_manager_module": {
      "de": "Musik Manager",
      "en": "Music Manager"
    }
  },
  "moduleContent": [
    "<h1 data-lang='music_manager_module'></h1>"
  ]
};