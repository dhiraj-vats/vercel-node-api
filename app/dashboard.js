import { readFileSync } from "fs";
import path from "path";

export default function handler(req, res) {
  const ejs = require("ejs");
  const templatePath = path.join(process.cwd(), "views", "dashboard.ejs");
  const html = ejs.render(readFileSync(templatePath, "utf8"), {});
  res.setHeader("Content-Type", "text/html");
  res.status(200).send(html);
}