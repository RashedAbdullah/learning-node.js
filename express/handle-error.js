const express = require("express");
const fs = require("fs");

const app = express();

app.get("/", (req, res, next) => {
  fs.readFile("./text.txt", (err, data) => {
    if (err) {
      next(err.message);
    
    } else {
      res.send(data);
    }
  });
});

// app.get("/", (req, res) => {
//   res.send("Handling Error");
//   // throw new Error("Throwing error by developer");
// });

// const notFound = (req, res, next) => {
//   res.status(404).send("404 - Not Found");
//   // next("404 - not Found"); for sending the message to the next error handler.
// };

// const handleError = (err, req, res, next) => {
//   // console.log(err.message);
//   // next();
//   // res.send("Sending data with skiping error");
//   // res.status(500).send("Sending data after handling errors");
//   if (err.message) {
//     res.status(500).send(err.message);
//   } else {
//     res.status(500).send("There was an error occured");
//   }
// };

// app.use(notFound); //Not found message fon unknown routs
// app.use(handleError); // Error handler must be the last middleware

app.listen(3000);
