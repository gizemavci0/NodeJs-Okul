const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoiZ3ptYXZjMCIsImEiOiJjbHU0NDh3M3UxZWRuMmpuMHZ3eWRzaHdhIn0.TOJnU1NyRoRbIepClJMs7Q";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      //console.log("Geocoding servisine bağlanamadı.");
      //error ve response dondurmesı yapıyoruz
      callback("Geocoding servisine bağlanamadı.", undefined);
    } else if (response.body.features.length === 0) {
      //console.log("Belirtilen konum bulunamadı.");
      callback("Belirtilen konum bulunamadı.", undefined);
    } else {
      const longitude = response.body.features[0].center[0];
      const latitude = response.body.features[0].center[1];
      //console.log("Enlem : " + latitude + "\nBoylam : " + longitude);
      callback(undefined, {
        longitude: response.body.features[0].center[0],
        latitude: response.body.features[0].center[1],
        location: response.body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
