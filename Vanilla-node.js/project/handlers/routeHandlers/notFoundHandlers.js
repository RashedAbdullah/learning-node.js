const handler = {};
handler.notFoundHandler = (reqPoperties, cb) => {
  console.log(reqPoperties);
  cb(404, {
    message: "404 - Not Found",
  });
};
module.exports = handler;
