const request = require("postman - request");
const url =
  "api.weatherstack.com/current?access_key=%&5c3376fd0dd61328d80dc06521e4bf2a&query=37.8267,-122.4233&units=s";
request({ url: url, json: ture }, (error, response) => {
  //   console.log(response);
  //   console.log(data.current);
  //   console.log(
  //     "Hava sıcaklığı:" +
  //       response.body.current.temperature +
  //       "Hissedilen:" +
  //       response.body.current.feelslike
  //   );

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

/*
const geocodeUrl = "linki yaz";

request({ url: geocodeUrl, json: true }, (error, response) => {
  const longitude = response.body.features[0].center[0];
  const latitude = response.body.features[0].center[1];
  console.log(" Enlem : " + latitude + "Boylam : " + longitude);
});

*/
