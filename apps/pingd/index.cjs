const express = require("express");

const app = express();

app.get("/ping", (req, res) => {
  res.status(200).json({
    message: "pong",
  });
});

app.listen(3000, () => {
  console.log("listening to 3000...");
});
