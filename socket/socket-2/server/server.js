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
    socket.broadcast.emit("recieve_msg", msg);
  });
  socket.on("new_user", (data) => {
    socket.broadcast.emit("new_user", data.user);
  });
  socket.on("user_typing", (data) => {
    socket.broadcast.emit("user_typing", data);
  });
});

server.listen(3001, () => {
  console.log("server is running");
});
