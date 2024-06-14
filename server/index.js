import express from "express";
import logger from "morgan";
import { Server } from "socket.io";
import { createServer } from "node:http";

const PORT = process.env.PORT ?? 3000;

const acceptedOrigins = [
  "http://localhost:3000",
  "http://localhost:1234",
  "http://localhost:5173",
  "https://example.com",
];

const app = express();
const server = createServer(app);

app.use(logger("dev"));
app.disable("x-powered-by");

const io = new Server(server, {
  connectionStateRecovery: {
    maxDisconnectionDuration: 30000
  },
  cors: {
    origin: acceptedOrigins,
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  // console.log("an user connected");

  // socket.on("disconnect", () => {
  //   console.log("user disconnected");
  // });

  socket.on("chat message", (msg) => {
    console.log("chat message: ", msg)
    io.emit("chat message", msg);
  });
});

app.get("/", (req, res) => {
  res.send("<h1 style='text-align: center'>Connectify Chat</h1>");
});

server.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}}`);
});
