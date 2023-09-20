const express = require("express");

const app = express();

const allowedDomains = [
  "test.clpx.cc",
  "john.clpx.cc",
  "cat.clpx.cc",
  "puppy.clpx.cc",
  "any.clpx.cc",
];

app.get("/", (req, res) => {
  const domain = req.query["domain"];

  if (allowedDomains.includes(domain)) {
    return res.status(200).send("OK");
  }

  return res.status(404).end();
});

app.listen(5555, () => {
  console.log("Tls Check is running");
});
