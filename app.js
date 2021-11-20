const express = require("express");
//creating app
const app = express();

app.use(express.static("views"));

app.set("view engine", "ejs");
app.get("/contacts", (req, res) => {
  //res.send("test3");
  //res.end();
  //res.sendFile("public/index.html", { root: __dirname });

  res.render("contacts"); //no need for ejs extension
});

app.get("/", (req, res) => {
  //res.send("test3");
  //res.end();
  //res.sendFile("public/index.html", { root: __dirname });

  res.render("index"); //no need for ejs extension
});
//make the app listen on port
const port = process.argv[2] || process.env.PORT || 3000;
console.log(port);
const server = app.listen(port, () => {
  console.log(`Cart app listening at http://localhost:${port}`);
});
