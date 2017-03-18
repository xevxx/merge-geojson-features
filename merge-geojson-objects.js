var seen = [];
function PassGeoJsonPair(jsonObj1, jsonObj2) {
    var a = ExtractFeatures(jsonObj1);
    var b = ExtractFeatures(jsonObj2);
    var features = ReduceJson(a, b);

    features = features.filter(function (x) {
        if (x.id) {
            if (seen.indexOf(x.id) >= 0) {
                return false;
            }

            seen.push(x.id);
        }

        return true;
    });
    

    var collection = {
        type: "FeatureCollection",
        features: features
    };
    return collection;
}

function ExtractFeatures(jsonObj) {
    var data = jsonObj;

  switch (data.type) {
  case "FeatureCollection":
    return data.features;

  case "Feature":
    return [data];

  default:
    console.warn("Unrecognized GeoJSON type:", data.type);
  }
}

function ReduceJson(a, b) {
  return a.concat(b);
};
