const fs = require("fs");

fs.writeFile("output.txt", "My Name is Rashed Abdullah", (err) => {
  if (err) {
    console.log("Error occured");
  } else {
    console.log("Code runing successfully");
  }
});
