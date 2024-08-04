const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  console.log(req.baseUrl);
  res.end("Rashed Abdullah");
});

app.listen(PORT, () => console.log(`Server started at ${PORT}`));
