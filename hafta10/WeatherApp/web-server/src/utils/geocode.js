const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoiZ3ptYXZjMCIsImEiOiJjbHU0NDh3M3UxZWRuMmpuMHZ3eWRzaHdhIn0.TOJnU1NyRoRbIepClJMs7Q";

  request({ url: url, json: true }, (error, { body }) => {
    if (error) {
      callback("Geocoding servisine bağlanamadı.", undefined);
    } else if (body.features.length === 0) {
      callback("Belirtilen konum bulunamadı.", undefined);
    } else {
      const longitude = body.features[0].center[0];
      const latitude = body.features[0].center[1];

      callback(undefined, {
        longitude: body.features[0].center[0],
        latitude: body.features[0].center[1],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
