const express = require("express");

const app = express();

app.get("/", (req, res) => {
  const host = req.headers["host"];

  res.send(`<h1>${host}</h1>`);
});

app.listen(4000, () => {
  console.log("App is running");
});
