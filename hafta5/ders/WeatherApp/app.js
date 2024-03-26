const request = require("request");

url =
  "http://api.weatherstack.com/current?access_key=fe043c506076165831ff246584cedde3&query=37.8267,-122.4233&units=s";

request({ url: url, json: true }, (error, response) => {
  /*console.log(
    "Hava sıcaklığı: " +
      response.body.current.temperature +
      "\nHissedilen: " +
      response.body.current.feelslike
  );*/
  if (error) {
    console.log("Hava durumu servisine bağlantı kurulamadı.");
  } else if (response.body.error) {
    console.log("Girilen konum bilgisi bulunamadı.");
  } else {
    console.log(
      "Hava sıcaklığı:" +
        response.body.current.temperature +
        "Hissedilen:" +
        response.body.current.feelslike
    );
  }
});

const geocodeUrl =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Bursa.json?access_token=pk.eyJ1IjoiZ3ptYXZjMCIsImEiOiJjbHU0NDh3M3UxZWRuMmpuMHZ3eWRzaHdhIn0.TOJnU1NyRoRbIepClJMs7Q";

request({ url: geocodeUrl, json: true }, (error, response) => {
  const longitude = response.body.features[0].center[0];
  const latitude = response.body.features[0].center[1];
  console.log("Enlem : " + latitude + "\nBoylam : " + longitude);
});
