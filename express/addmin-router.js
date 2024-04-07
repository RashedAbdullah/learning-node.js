const express = require("express");
const adminRouter = express.Router();

const middlewareToAll = (req, res, next) => {
  console.log("Response to admin routers");
  next();
};

adminRouter.all("*", middlewareToAll);

adminRouter.get("/", (_req, res) => {
  res.send("Admin router home page");
});

adminRouter.param("name", (req, res, next, name) => {
  name === "rahsed" ? "You're Rashed Abdullah" : "I Don't know you";
  next();
});

adminRouter.get("/user/:name", (req, res) => {
  res.send(`Your name is: ${req.name}`);
});

adminRouter.get("/signin", (req, res) => {
  res.send("Admin router sign in page");
});

module.exports = adminRouter;
