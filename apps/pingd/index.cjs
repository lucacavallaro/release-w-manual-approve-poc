const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("tiny"));

app.get("/ping", (req, res) => {
  res.status(200).json({
    message: "pong",
  });
});

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log("listening to 3000...");
});

const close = () => {
  server.close();
  server.closeAllConnections();
  console.log("bye!");
}

process.on("SIGINT", close);
process.on("SIGTERM", close);
