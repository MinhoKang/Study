const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);

const { Server } = require("socket.io");

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.on("send_msg", (msg) => {
    console.log(msg);
    socket.broadcast.emit("recieve_msg", msg);
  });
});

server.listen(3001, () => {
  console.log("server is running");
});
