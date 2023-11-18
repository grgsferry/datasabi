const express = require("express");
const app = express();
import serverless from "serverless-http";

var serviceRouter = express.Router({ mergeParams: true });

const port = 3000;

// app.use(express.static("src"));
app.use("/dist", express.static(__dirname + "/dist"));
app.use("/src", express.static(__dirname + "/src"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/home", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  //   res.render("about");
  res.status(200).send("about");
});

app.get("/portfolios", (req, res) => {
  //   res.render("portfolios");
  res.status(200).send("porto");
});

serviceRouter.route("/:serviceId").get(function (req, res) {
  res.status(200).send("hello user " + req.params.serviceId);
});

app.use("/services", serviceRouter);

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

export const handler = serverless(app);
