const express = require("express");
const app = express();
const port = 3000;
const users = require("./data/MOCK_DATA.json");

// Routes
app.get("/users", (req, res) => {
  return res.json(users);
});
app.listen(port, () => console.log(`Server started at: ${port} port`));
