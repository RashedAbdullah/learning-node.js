const http = require("http");
// console.log(http);
// console.log(http.METHODS);
const server = http.createServer((req, res) => {
  if (req.url === "/about") {
    res.write("This is about page");
  } else if (req.url === "/") {
    res.write("This is Home page");
  } else {
    res.write("Not Found");
  }

  res.end();
});

// server.on("connection", () => console.log("Server connected"));
server.listen(3000);
console.log("Server is on");
