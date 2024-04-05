const express = require("express");
const app = express();

// app.use(express.json());
// app.use(express.static(`${__dirname}/public`));
const router = express.Router({caseSensitive: true});
app.use(router);

router.get("/home", (req, res) => {
  res.send("This is response with get method in home page");
});

app.get("/about", (req, res) => {
  res.send("This is response with get method in about page");
});

app.post("/", (req, res) => {
  res.send("This is response with post method");
});

app.delete("/", (req, res) => {
  res.send("This is response with delete method");
});

app.listen(3000, () => {
  console.log("This is 3000");
});
