const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=fe043c506076165831ff246584cedde3&query=" +
    +latitude;
  "," + longitude + "&units=s";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      //console.log("Hava durumu servisine bağlantı kurulamadı.");
      callback("Hava durumu servisine bağlantı kurulamadı.", undefined);
    } else if (response.body.error) {
      //console.log("Girilen konum bilgisi bulunamadı.");
      callback("Girilen konum bilgisi bulunamadı.", undefined);
    } else {
      // console.log(
      //   "Hava sıcaklığı:" +
      //     response.body.current.temperature +
      //     "Hissedilen:" +
      //     response.body.current.feelslike
      // );
      callback(
        undefined,
        "Hava şu anda: " +
          response.body.current.weather_descriptions[0] +
          "\nHava sıcaklığı şu anda: " +
          response.body.current.temperature +
          " derece \nHissedilen sıcaklık: " +
          response.body.current.feelslike +
          " derece"
      );
    }
  });
};

module.exports = forecast;
