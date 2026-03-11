const express = require("express");

const app = express();

app.get("/api/test", (req, res) => {
  res.json({
    message: "Index API working",
    time: new Date()
  });
});

module.exports = app;