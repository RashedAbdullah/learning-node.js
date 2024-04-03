/*
Title: Uptime monitoring app
Description: A Restfull Api
Author: Rashed Abdullah
Date: 3/4/24
*/

// Dependencies:
const http = require("http");
const { handleReqRes } = require("./helpers/handleReqRes");

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
app.handleReqRes = handleReqRes;

// Starting Server:
app.createServer();
