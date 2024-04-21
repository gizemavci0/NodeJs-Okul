const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

app.set("view engine", "hbs");
const viewsPath = path.join(__dirname, "../public/templates/views");
app.set("views", viewsPath);

const publicDirectoryPath = path.join(__dirname, "../public"); ///herkese açık klasör bilgisi
app.use(express.static(publicDirectoryPath));

const partialsPath = path.join(__dirname, "../public/templates/partials");
hbs.registerPartials(partialsPath);

app.get("", (req, res) => {
  res.render("index", {
    title: "Hava Durumu Uygulaması",
    name: "Gizem Avci",
  });
});

app.get("/weather", (req, res) => {
  //weather
  res.send({
    forecast: "Hava yağışlı",
    location: "Bursa",
  });
});

app.get("/help", (req, res) => {
  //help
  res.render("help", {
    title: "Yardım sayfası",
    name: "Gizem Avci",
    helpText: "Bu bir deneme yazısıdır.",
  });
});

app.get("/about", (req, res) => {
  //about
  res.render("about", {
    title: "Hakkımızda",
    name: "Gizem Avci",
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404 Yardım Sayfası",
    name: "Gizem Avcı",
    errorMessage: "Aradığınız Yardım Sayfası Bulunamadı",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404 Sayfası",
    name: "Gizem Avcı",
    errorMessage: "Aradığınız Sayfa Bulunamadı",
  });
});

app.listen(3000, () => {
  console.log("Sunucu 3000 portunu dinliyor..");
});
