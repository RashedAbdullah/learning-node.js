const handler = {};
handler.sampleHandler = (reqPoperties, cb) => {
  console.log(reqPoperties);
  cb(200, {
    message: "This is sample response",
  });
};
module.exports = handler;
