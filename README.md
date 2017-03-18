# merge-geojson-features

Merges GeoJSON Features and FeatureCollections.

## Usage for merge-geojson-objects.js

Call function 

`PassGeoJsonPair(jsonObj1, jsonObj2)`

with two json objects ( Can be single feature or feature collection)
returns merged collection

Currently utilising for simple ol3 app and localstorge

####################################

## Usage for index.js (original file)

`1.json` and `2.json` may either be JSON files containing GeoJSON
`FeatureCollection`s or individual `Feature`s. The output will be
a `FeatureCollection` containing all features present in the files to be
merged.

```bash
merge-geojson-features 1.json 2.json > merged.json
```
