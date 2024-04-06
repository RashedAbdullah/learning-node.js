const express = require("express");
const app = express();

const middleware = (req, res, next) => {
  console.log("i'm in middleware");
  next();
  // throw new Error("There was an error by throw");
};

// const middleware2 = (req, res, next) => {
//   console.log("i'm in middleware2");
//   next();
// };

app.use(middleware);
// app.use(middleware2);

app.get("/home", (req, res) => {
  res.send("Middleware send");
});

// Middleware error handler:
const errorHandler = (err, req, res, next) => {
  res.status(500).send("There was an error in server");
  console.log(err.message);
};

app.use(errorHandler);
app.listen(3000);
