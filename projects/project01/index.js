const express = require("express");
const app = express();
const PORT = 3000;

const users = require("./users.json");

app.get("/", (req, res) => {
  console.log(req.baseUrl);
  res.end("Rashed Abdullah");
});

// JSON Data
app.get("/api/users", (req, res) => {
  return res.json(users);
});

// HTML Data
app.get("/api/users/html", (req, res) => {
  const html = `
  <ul>
  ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
  </ul>
  `;
  res.send(html);
});

// Single user / Dynamic path parameters
app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .post((req, res) => {})
  .patch((req, res) => {
    // Edit:
    return res.json({ status: "Panding..." });
  })
  .delete((req, res) => {});

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));
