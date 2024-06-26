const url = require("url");
const { StringDecoder } = require("string_decoder");
const routes = require("../routes");
const {
  notFoundHandler,
} = require("../handlers/routeHandlers/notFoundHandlers");

const handler = {};
handler.handleReqRes = (req, res) => {
  const parsedUrl = url.parse(req.url, true); // true for consider query strings.
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, "");
  const method = req.method.toLowerCase();
  const queryStrings = parsedUrl.query;
  const headers = req.headers;

  const requestPoperties = {
    parsedUrl,
    path,
    trimmedPath,
    method,
    queryStrings,
    headers,
  };

  const decoder = new StringDecoder("utf-8");
  let realData = "";

  const chosenHandler = routes[trimmedPath]
    ? routes[trimmedPath]
    : notFoundHandler;

  chosenHandler(requestPoperties, (statusCode, payload) => {
    statusCode = typeof statusCode === "number" ? statusCode : 500;
    payload = typeof payload === "object" ? payload : {};
    const payloadString = JSON.stringify(payload);

    // Response:
    res.writeHead(statusCode);
    res.end(payloadString);
  });
  req.on("data", (Buffer) => {
    realData += decoder.write(Buffer);
  });

  req.on("end", () => {
    realData += decoder.end();
    console.log(realData);
    res.end("end");
  });
};

module.exports = handler;
