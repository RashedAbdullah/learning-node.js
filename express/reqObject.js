const express = require("express");
const cookeParser = require("cookie-parser");
const app = express();

app.use(express.json());
app.use(cookeParser());

app.get("/user/:id", (req, res) => {
  // console.log(req.ip)
  // console.log(req.method)
  // console.log(req.params);
  console.log(req.route);
  res.send("Request object");
});

app.post("/user", (req, res) => {
  console.log(req.cookies);
  res.send("user post method");
});
app.listen(3000);
