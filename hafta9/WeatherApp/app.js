const request = require("request");

const geocode = require("./utils/geocode");

const forecast = require("./utils/forecast");

const address = process.argv[2];

if (!address) {
  console.log("Lütfen bir konum bilgisi girin");
} else {
  geocode(address, (error, { longitude, latitude, location } = {}) => {
    if (error) {
      return console.log(error);
    } else {
      forecast(latitude, longitude, (error, data) => {
        console.log(location);
        if (error) {
          return console.log(error);
        }
        console.log(data);
      });
    }
  });
}
