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

const http = require("http");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      return res.end("This is home page");
    case "/about":
      return res.end("This is about page");
    case "/service":
      return res.end("This is service page");
    default:
      return res.end("Not Matched");
  }
});

server.listen(3000, () => console.log("Server running successfully"));
