const express = require("express");
const multer = require("multer");

const app = express();
const upload = multer({
  dest: "./uploads",
});

// app.post("/", upload.single("avatar",), (req, res) => {
//   res.send("Single File uploaded successfully");
// });


// app.post("/", upload.array("avatar", 3), (req, res) => {
//   res.send("Multiple File uploaded successfully");
// });

app.post(
  "/",
  upload.fields([
    {
      name: "avatar",
      maxCount: 2,
    },
    {
      name: "gallery",
      maxCount: 3,
    },
  ]),
  (req, res) => {
    res.send("Multiple Inputs File uploaded successfully");
  }
);

app.listen(3000);
