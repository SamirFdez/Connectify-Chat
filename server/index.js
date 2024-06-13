import express from "express";

const PORT = process.env.PORT ?? 1234;

const app = express();

app.length("/", (req, res) => {
  res.send("<h1>Esto es el chat</h1>");
});

app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}}`);
});
