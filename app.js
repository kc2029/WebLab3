const express = require("express");
//creating app
const app = express();

app.use(express.static("public"));
//app.use(express.static("views"));
app.set("view engine", "ejs");
app.get("/contacts", (req, res) => {
  //res.send("test3");
  //res.end();
  //res.sendFile("public/index.html", { root: __dirname });
  res.render("contacts"); //no need for ejs extension
});

app.get("/register", (req, res) => {
  res.render("register"); //no need for ejs extension
});

app.get("/catalog", (req, res) => {
  res.render("catalog"); //no need for ejs extension
});
app.get("/clients", (req, res) => {
  res.render("clients"); //no need for ejs extension
});

app.get("/login", (req, res) => {
  res.render("login"); //no need for ejs extension
});
//this refer to the webpage/  or the index page of ejs
app.get("/", (req, res) => {
  res.render("index"); //no need for ejs extension
});

//to pass request to router
const router = require("./routes/routes");
app.use(router);

//make the app listen on port
const port = process.argv[2] || process.env.PORT || 3000;
console.log(port);
const server = app.listen(port, () => {
  console.log(`Cart app listening at http://localhost:${port}`);
});

//const session = require('express-session’);
//app.use(session({secret: ‘password’}));
