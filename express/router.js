const express = require("express");
const adminRouter = require("./addmin-router");
const app = express();
app.get("/", (req, res) => {
  res.send("Home page");
});

app.use("/admin", adminRouter);

app.listen(3000);
