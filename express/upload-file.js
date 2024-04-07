const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    const fileExt = path.extname(file.originalname);
    const fileName =
      file.originalname
        .replace(fileExt, "")
        .toLowerCase()
        .split(" ")
        .join("-") +
      "-" +
      Date.now();
    cb(null, fileName + fileExt);
  },
});
const upload = multer({
  // dest: "./uploads",
  storage: storage,
  limits: {
    fileSize: 1000000, //1MB
  },
  fileFilter: (req, file, cb) => {
    if (file.fieldname === "avatar") {
      if (
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg"
      ) {
        cb(null, true);
      } else {
        cb(new Error("Only png, jpg or jpeg is allowed"));
      }
    } else if (file.fieldname === "pdf") {
      if (file.mimetype === "application/pdf") {
        cb(null, true);
      } else {
        cb(new Error("Only pdf is allowed"));
      }
    } else {
      cb(new Error("There was unknown error"));
    }
  },
});

// app.post("/", upload.single("avatar"), (req, res) => {
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
      maxCount: 1,
    },
    {
      name: "pdf",
      maxCount: 1,
    },
  ]),
  (req, res) => {
    console.log(req.files);
    res.send("Multiple Inputs File uploaded successfully");
  }
);

// For just submit, not for upload file:
// app.post("/", upload.none(), (req, res) => {
//   res.send("Single File uploaded successfully");
// });

const handleError = (err, req, res, next) => {
  if (err) {
    if (err instanceof multer.MulterError) {
      res.status(500).send("There was an uploading iamge error");
    } else {
      res.status(500).send(err.message);
    }
  } else {
    res.send("Successfully uploaded images");
  }
};

app.use(handleError);

app.listen(3000);
