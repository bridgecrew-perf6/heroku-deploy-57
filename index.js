require("dotenv").config();
const express = require("express");

const server = express();
server.use(express.json());

server.get("/api/users", (req, res) => {
  res.json([
    { id: 1, username: "matt" },
    { id: 2, username: "john" },
    { id: 3, username: "frank" },
  ]);
});

server.post("/api/register", (req, res) => {
  res.json(req.body);
});

server.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).json({ message: `Missing required text` });
  } else {
    res.status(200).json({ message: `Welcome!` });
  }
});

PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
