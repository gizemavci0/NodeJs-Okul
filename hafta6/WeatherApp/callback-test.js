// //aseknron bır callback fonk
// setTimeout(() => {
//   console.log("2 saniye time out");
// }, 2000);

// //senkron bir callback fonksıyon
// const names = ["Ali", "Veli", "Ayşe"];

// // karakter uzunlugu 4 e esit veya kucukleri getır
// const shortNames = names.filter((name) => {
//   return name.length <= 4;
// });

// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       latitude: 0,
//       longitude: 0,
//     };
//     callback(data);
//   }, 2000);
// };
// //senkron
// const data = geocode("Bursa");
// console.log(data);

const geocode = (address, callback) => {
  const data = {
    latitude: 0,
    longitude: 0,
  };
  return data;
};

const data = geocode("Bursa");
console.log(data);

// // asenkron
// geocode("Bursa", (data) => {
//   console.log(data);
// });

// const add = (a, b, callback) => {
//   setTimeout(() => {
//     callback(a + b);
//   }, 2000);
// };

// add(1, 4, (result) => {
//   console.log(result);
// });
