import express from "express";
import serverless from "serverless-http";
import { fileURLToPath } from "url";
import path from "path";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = 3000;

app.use("/dist", express.static(__dirname + "/dist"));
app.use("/src", express.static(__dirname + "/dist/src"));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/about.html"));
});

app.get("/portfolios", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/portfolios.html"));
});

app.get("/services-data-analysis", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/services-data-analysis.html"));
});

app.get("/services-data-storytelling", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/services-data-storytelling.html"));
});

app.get("/services-data-visualization", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/services-data-visualization.html"));
});

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

export const handler = serverless(app);
