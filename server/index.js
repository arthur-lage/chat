import express from "express";
import cors from "cors";

import { Server } from "socket.io";

import { config } from "dotenv";
import mongoose from "mongoose";
config();

import { routes as userRoutes } from "./routes/user.js";
import { routes as messageRoutes } from "./routes/message.js";

const connectionURL = `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster0.pkc0f.mongodb.net/?retryWrites=true&w=majority`;

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/messages", messageRoutes);

mongoose
  .connect(connectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log(`Couldn't connect to database. Error: ${err}`);
  });

const server = app.listen(PORT, () => {
  console.log(`Running server on port ${PORT}`);
});

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

global.onlineUsers = new Map()

io.on("connection", (socket) => {
  global.chatSocket = socket

  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id)
  })

  socket.on("send-message", (data) => {
    const sendUserSocket = onlineUsers.get(data.to)
    if(sendUserSocket) {
      socket.to(sendUserSocket).emit("message-receive", data.msg)
    }
  })
})