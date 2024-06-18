import dotenv from "dotenv";
import mongoose from "mongoose";

export const connectionDB = () => {
  dotenv.config();

  const uri = process.env.DB_CONNECTION;
  const db = mongoose.connection;

  mongoose.connect(uri).catch((err) => console.log(err));

  db.on("open", (_) => {
    // const db = mongoose.createConnection(uri).name;
    console.log("Database is connected");
  });

  db.on("error", (err) => {
    console.log(err);
  });
};
