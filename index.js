require("dotenv").config();
const express = require("express");

const server = express();

server.get("api/users", (req, res) => {
  res.json([
    { id: 1, username: "matt" },
    { id: 2, username: "john" },
    { id: 3, username: "frank" },
  ]);
});

PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
