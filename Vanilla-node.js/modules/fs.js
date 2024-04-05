const fs = require("fs"); //File System
console.log(fs);
fs.writeFileSync("fs-test.txt", "Learning Node js");
fs.appendFileSync("fs-test.txt", "My goal is become a good programmer");
const data = fs.readFileSync("fs-test.txt");
console.log(data); //Buffer
console.log(data.toString())
fs.readFile("../index.html", (_err, data) => console.log(data.toString()));
console.log("Sync on Async");
