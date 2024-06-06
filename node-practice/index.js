// const fs = require("fs");
// const os = require("os");

// const { math } = require("./math");

// fs.writeFile("output.txt", "This is async text file creatation", (err) => {
//   if (err) {
//     console.log("Error occured");
//   } else {
//     console.log("Code runing successfully");
//   }
// });

// fs.writeFile("output2.txt", "This is sync text file creatation\n", (err) => {
//   if (err) {
//     console.log("Error occured");
//   } else {
//     console.log("Code runing successfully");
//   }
// });

// console.log(math(4, 5));
// console.log(fs)

// Sync
// const data = fs.readFileSync("./output.txt", "utf-8");
// console.log(data);

// fs.readFile("output.txt", "utf-8", (err, result) => {
//   console.log(result);
// });

// fs.appendFile("output2.txt", "This is sync text file creatation\n", (err) => {
//   if (err) {
//     console.log("Error occured");
//   } else {
//     console.log("Code runing successfully");
//   }
// });

// console.log(fs.statSync("./output.txt"));

// fs.mkdirSync("test-folder");
// console.log(os.cpus().length);

// const http = require("http");
// const url = require("url");

// const server = http.createServer((req, res) => {
//   const parsedUrl = url.parse(req.url);
// console.log(parsedUrl);
//   switch (req.url) {
//     case "/":
//       return res.end("This is home page");
//     case "/about":
//       return res.end("This is about page");
//     case "/service":
//       return res.end("This is service page");
//     default:
//       return res.end("404 - Not Found");
//   }
// });

// server.listen(3000, () => console.log("Server running successfully"));

// const http = require("http");
const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  console.log(req.query);
  res.send(`Hello ${req.query.name}`);
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

// const server = http.createServer(app);
app.listen(port, () => console.log("This is port"));
