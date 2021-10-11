const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get("/", (req, res) => {
  res.end("realtime voting app");
});

const votes = {
  bright: 0,
  tombRaider: 0,
  blackPanther: 0,
  thePlatform: 0,
};

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.emit("new-vote", votes);

  socket.on("new-vote", (vote) => {
    console.log("New vote:", votes);
    votes[vote] += 1;
    io.emit("new-vote", vote);
  });

  socket.on("disconnect", () => console.log("a user disconnected"));
});

module.exports = app;