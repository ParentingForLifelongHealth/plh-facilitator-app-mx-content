# plh-facilitator-app-nx-content
This package contains data used in the Mexico PLH facilitator version of the app

Linked directly to PLH facilitator https://github.com/IDEMSInternational/plh-facilitator-app-content

## App Preview
https://plh-facilitator-mx.web.app/

## Syncing data updates
Data can be syncd from corresponding google drive folders via the script
```
yarn scripts app-data-sync
```

## Translations
Files for translation, and compiled translation strings are automatically generated during sync scripts.

Any strings for use in translations should be placed in the `./translations_source/from_translators` folder named in the format `{filename}.{langCode}.json`

The final output of translation strings can be found in the `./translations/strings` folder.

References to these strings are stored in individual data files, so that the app can quickly know what rows have text available for translation and which languages currently have existing translations
