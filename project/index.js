/*
Title: Uptime monitoring app
Description: A Restfull Api
Author: Rashed Abdullah
Date: 3/4/24
*/

// Dependencies:
const http = require("http");
const url = require("url");

// Module scaffolding
const app = {};

// Configuration
app.config = {
  port: 3000,
};

// Create Server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(app.config.port, () => {
    console.log(`The port is ${app.config.port}`);
  });
};

//Handle Request ans response
app.handleReqRes = (req, res) => {
  // handle request
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, "");
  const method = req.method.toLowerCase();
  const queryStrings = parsedUrl.query;
  const headers = req.headers;
  console.log(headers);
  // handle response
  res.end(`{
    name: "Rashed Abdullah",
    Age: 23
}`);
};

// Starting Server:
app.createServer();
