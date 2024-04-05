const express = require("express");
const app = express();
const path = require("path");

//app.com : app.com , app.com/about , app.com/help

//console.log(__dirname);
//console.log(path.join(__dirname, "../public"));

app.set("view engine", "hbs");
const viewsPath = path.join(__dirname, "../public/views");
app.set("views", viewsPath);

const publicDirectoryPath = path.join(__dirname, "../public"); ///herkese açık klasör bilgisi
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  //home page
  // res.send("<h1>Hava Durumu</h1>");
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
  //res.send([{ name: "Can" }, { name: "Canan" }]);
  res.render("help", {
    title: "Yardım sayfası",
    helpText: "Bu bir deneme yazısıdır.",
  });
});

app.get("/about", (req, res) => {
  //about
  //res.send("<h1>Hakkımızda</h1>");
  res.render("about", {
    title: "Hakkımızda",
    name: "Gizem Avci",
  });
});

app.listen(3000, () => {
  console.log("Sunucu 3000 portunu dinliyor..");
});
