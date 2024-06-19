import express from "express";
import logger from "morgan";
import { Server } from "socket.io";
import { createServer } from "node:http";
import { connectionDB } from "./connection.js";

import { updateOrCreateUser } from "./controllers/user.js";

const PORT = process.env.PORT ?? 3000;

const acceptedOrigins = [
  "http://localhost:3000",
  "http://localhost:1234",
  "http://localhost:5173",
  "https://example.com",
  "*",
];

connectionDB();
const app = express();
const server = createServer(app);

app.use(logger("dev"));
app.disable("x-powered-by");

const io = new Server(server, {
  connectionStateRecovery: {
    maxDisconnectionDuration: 30000,
  },
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connect", (socket) => {
  socket.on("user", (user) => {
    updateOrCreateUser(user);
  });

  

  socket.on("chat message", (msg) => {
    const timestamp = new Date();
    const message = {
      timestamp: timestamp,
      message: msg,
    };
    io.emit("chat message", message);
  });
});

app.get("/", (req, res) => {
  res.send("<h1 style='text-align: center'>Connectify Chat</h1>");
});

server.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}}`);
});
