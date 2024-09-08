const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");
const app = express();
const PORT = 3000;
const users = require("./users.json");

// Connection with mongoDB:
mongoose
  .connect("mongodb://localhost:27017/jamiatul_latif")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Schema:
const texamSchema = new mongoose.Schema(
  {
    examName: {
      type: String,
      required: true,
    },
    examYear: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Model:
const examModel = mongoose.model("Exam", texamSchema);

app.get("/", (req, res) => {
  console.log(req.baseUrl);
  res.end("Rashed Abdullah");
});

// Middlware
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  // return res.json({ message: "Response from middlware two" });
  req.myCity = "Feni Bangladesh";
  next();
});

app.use((req, res, next) => {
  // console.log(req.myCity);
  // return res.json({ message: "Response from middlware three" });
  next();
});

// JSON Data
app.get("/api/users", async (req, res) => {
  // console.log(req.headers.nephew);

  // res.setHeader("myName", "Rashed Abdullah");
  const exams = await examModel.find({});

  // return res.json(users);
  return res.json(exams);
});

app.post("/api/users", async (req, res) => {
  const body = req.body;
  // users.push(body);
  // fs.writeFile("./users.json", JSON.stringify(users), (err, data) => {
  //   return res.status(201).json({ status: "Successfully data inserted..." });
  // });

  const exam = await examModel.create({
    examName: body.examName,
    examYear: body.examYear,
  });

  return res.status(201).json({ msg: "Successfully created exam" });
});

// HTML Data
app.get("/api/users/html", async (req, res) => {
  const exams = await examModel.find({});
  const html = `
  <ul>
  ${exams.map((exam) => `<li>${exam.examName}</li>`).join("")}
  </ul>
  `;
  res.send(html);
});

// Single user / Dynamic path parameters
app
  .route("/api/users/:id")
  .get(async (req, res) => {
    const exam = await examModel.findById(req.params.id);
    // const id = Number(req.params.id);
    // const user = users.find((user) => user.id === id);
    return res.json(exam);
  })
  .patch((req, res) => {
    // Edit:
    return res.json({ status: "Panding..." });
  })
  .delete((req, res) => {
    const body = req.body;
    users.pop(body);
    fs.writeFile("./users.json", JSON.stringify(users), (err, data) => {
      return res.json({ status: "Successfully data inserted..." });
    });
  });

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));
