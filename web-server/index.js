const express = require("express");
const app = express();
const path = require("path");

// console.log(__dirname);

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "test")));
app.use(express.urlencoded({ extended: false }));

// app.get("/", function (req, res) {
//   console.log(req);
//   res.send("<h1>トップページ</>");
// });

app.get("/about", function (req, res) {
  res.send("about");
});

app.post("/api/v1/quiz", function (req, res) {
  const answer = req.body.answer;
  if (answer == 2) res.send(answer);
  else res.send("miss");
});

app.listen(3000, function () {
  console.log("running");
});
