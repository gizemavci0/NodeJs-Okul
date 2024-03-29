const request = require("request");

const geocode = require("./utils/geocode");

const forecast = require("./utils/forecast");

//geocode
// geocode("Bursa", (error, data) => {
//   console.log("Hata: ", error);
//   console.log("Data: ", data);
// });

//forecast
// forecast(44.1545, -75.7088, (error, data) => {
//   console.log("Hata: ", error);
//   console.log("Data: ", data);
// });

/*
geocode("Yıldırım", (error, data) => {
  if (error) {
    return console.log(error);
  } else {
    forecast(data.latitude, data.longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(data.location);
      console.log(forecastData);
    });
  }
});
*/
const address = process.argv[2];

if (!address) {
  console.log("Lütfen bir konum bilgisi girin");
} else {
  geocode(address, (error, data) => {
    if (error) {
      return console.log(error);
    } else {
      forecast(data.latitude, data.longitude, (error, data) => {
        if (error) {
          return console.log(error);
        }
        console.log(data);
      });
    }
  });
}
