const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const server = express();
const usersRouter = require("../users/users-router");
server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(morgan("combined"));

server.get("/", (req, res) => {
  res.send("sanity check");
});

server.use("/users", usersRouter);

module.exports = server;
