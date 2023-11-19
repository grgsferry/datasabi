import express from "express";
import serverless from "serverless-http";
import { fileURLToPath } from "url";
import path from "path";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const serviceRouter = express.Router({ mergeParams: true });

const port = 3000;

app.use("/dist", express.static(__dirname + "/dist"));
app.use("/src", express.static(__dirname + "/src"));
app.use("/views", express.static(__dirname + "/views"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});

app.get("/about", (req, res) => {
  res.status(200).send("about");
});

app.get("/portfolios", (req, res) => {
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
