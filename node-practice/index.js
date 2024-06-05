const fs = require("fs");

const { math } = require("./math");

console.log("Hello Node.js");

fs.writeFile("output.txt", "My Name is Rashed Abdullah", (err) => {
  if (err) {
    console.log("Error occured");
  } else {
    console.log("Code runing successfully");
  }
});

console.log(math(4, 5));
// console.log(fs)