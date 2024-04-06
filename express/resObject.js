const express = require("express");

const app = express();
app.set("view engine", "ejs");

app.get("/home", (req, res) => {
  //   console.log(res.headersSent); //false
  //   res.render("home", {
  //     page: "Home page",
  //   });
  //   console.log(res.headersSent); //true
  // res.send("Response Send"); //End with sending Data.
  // res.end(); // End Data without sending Data.
  //   res.json({
  //     name: "Rashed Abdullah",
  //   });
  //   res.format({
  //     "text/plain": () => {
  //       res.send("Plain text");
  //     },
  //     "text/html": () => {
  //       res.render("home", {
  //         page: "Home page",
  //       });
  //     },
  //     "application/json": () => {
  //       res.send({
  //         name: "Rashed Abdullah",
  //       });
  //     },
  //     default: () => {
  //       res.status(406).send("Not acceptable");
  //     },
  //   });
  // Set cookie:
  //   res.cookie("name", "Rashed Abdullah");
  //   res.end();
  // location:
  //   res.location("/path");
  //     res.end();
  // Redirect:
  //   res.redirect("/path");
  //   res.end();

  // set:
    res.set("name", "Rashed Abdullah");
    res.end();
  // get:
  console.log(res.get("name"));
  res.end();
});

// app.get("/path", (req, res) => {
//   res.send("This is Redirected path");
// });

app.listen(3000);
