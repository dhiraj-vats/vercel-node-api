import { readFileSync } from "fs";
import path from "path";

export default function handler(req, res) {
  if(req.method === "GET") {
    const ejs = require("ejs");
    const templatePath = path.join(process.cwd(), "views", "login.ejs");
    const html = ejs.render(readFileSync(templatePath, "utf8"), {});
    res.setHeader("Content-Type", "text/html");
    res.status(200).send(html);
  } else if(req.method === "POST") {
    const body = [];
    req.on("data", chunk => body.push(chunk));
    req.on("end", () => {
      const parsed = new URLSearchParams(Buffer.concat(body).toString());
      const username = parsed.get("username");
      const password = parsed.get("password");

      // Bachon ke simple login
      if(username === "user" && password === "123") {
        // redirect to dashboard
        res.writeHead(302, { Location: "/api/dashboard" });
        res.end();
      } else {
        res.status(200).send("Login Failed");
      }
    });
  }
}