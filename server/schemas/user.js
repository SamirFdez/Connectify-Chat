import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const userSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: uuidv4(),
    },
    name: String,
    isConnected: Boolean
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
