const express = require("express");
const app = express();


// const admin = express();

// EJS:
// app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//   console.log(req.protocol);
//   res.render("home");
// });

// app.use(express.json());
// app.use(express.static(`${__dirname}/public`));
// const router = express.Router({caseSensitive: true});
// app.use(router);
// app.use("/admin", admin);

// it's middleware
// app.param("id", (req, res, next, id) => {
//   const user = {
//     id: 5,
//     name: "Rashed Abdullah",
//   };

//   req.user = user;
//   next();
// });

// app.get("/user/:id", (req, res) => {
//   console.log(req.user);
//   res.send("user id");
// });

// app
//   .route("/blogs/blog")
//   .get((req, res) => {
//     res.send("blog get");
//   })
//   .delete((req, res) => {
//     res.send("blog delelete");
//   })
//   .patch((req, res) => {
//     res.send("blog patch");
//   })
//   .post((req, res) => {
//     res.send("blog post");
//   })
//   .put((req, res) => {
//     res.send("blog put");
//   });

// app.locals.author = "Rashed Abdullah";

// app.enable("case sensitive routing");

// app.all("/home", (req, res) => {
//   //   console.log(app.locals.author);
//   res.send("This is response with all method in home page with home url");
// });

// admin.get("/dashboard", (req, res) => {
//   res.send("Response to admin dashboard");
// });

// app.get("/", (req, res) => {
//   //   console.log(app.locals.author);
//   res.send("This is response with get method in home page with home url");
// });

// app.get("/about", (req, res) => {
//   res.send("This is response with get method in about page");
// });

// app.post("/", (req, res) => {
//   res.send("This is response with post method");
// });

// app.delete("/", (req, res) => {
//   res.send("This is response with delete method");
// });

// app.listen(3000, () => {
//   console.log("This is 3000");
// });
