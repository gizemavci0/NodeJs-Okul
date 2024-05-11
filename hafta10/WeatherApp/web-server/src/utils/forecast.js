const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=fe043c506076165831ff246584cedde3&query=" +
    +latitude;
  "," + longitude + "&units=s";

  request({ url: url, json: true }, (error, { body }) => {
    if (error) {
      callback("Hava durumu servisine bağlantı kurulamadı.", undefined);
    } else if (body.error) {
      callback("Girilen konum bilgisi bulunamadı.", undefined);
    } else {
      callback(
        undefined,
        "Hava şu anda: " +
          body.current.weather_descriptions[0] +
          "\nHava sıcaklığı şu anda: " +
          body.current.temperature +
          " derece \nHissedilen sıcaklık: " +
          body.current.feelslike +
          " derece"
      );
    }
  });
};

module.exports = forecast;
