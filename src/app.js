
const express = require("express");
const path = require("path");
var hbs = require("hbs");
const { hostname } = require("os");
const app = express();
const port = 3000;

const filePath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");


app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialsPath);

app.use(express.static(filePath));

app.get("/", (req, res) => {
  res.sendFile(path.join(filePath, "weather.html"));
});
// app.get("/", (req, res) => {
//   res.render("index");
// });

app.get("/about", (req, res) => {
  res.render("about", {
    id:1,
    user:'Pravin'
  });
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.get("/weather", (req, res) => {
  res.render("weather");
});

app.get("*", (req, res)=> {
  res.render('err')
})

app.listen(port,() => {
  console.log(`Listening on port ${port}`);
});
