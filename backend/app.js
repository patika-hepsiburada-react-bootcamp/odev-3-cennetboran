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
//start connection to socket
io.on("connection", (socket) => {
  console.log("a user connected");
  
  socket.emit("new-vote", votes);
  //get data and write
  socket.on("new-vote", (vote) => {
    console.log("New vote:", votes);
    votes[vote] += 1;
    io.emit("new-vote", votes);
  });

  socket.on("disconnect", () => console.log("a user disconnected"));
});
// start backend server
server.listen(3000, () => {
  console.log("listening on *:3000");
});

module.exports = app;