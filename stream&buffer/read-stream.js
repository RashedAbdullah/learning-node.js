const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write(
      `<html>
        <head>
          <title>Form</title>
        </head>
        <body>
          <form action="/process" method="POST">
            <input type="text" />
          </form>
        </body>
      </html>`
    );
  } else if (req.url === "/process" && req.method === "POST") {
    req.on("data", (chunk) => {
      console.log(chunk);
    });
    req.on("end", () => {
      console.log("Finished");
    });
    res.write("This is Response");
  } else {
    res.write("Not found");
  }
  res.end();
});
server.listen(3000);

// const fs = require("fs");

// const readStream = fs.createReadStream(`${__dirname}/data.txt`, "utf8");
// readStream.on("data", (data) => {
//   console.log(data);
// });
