import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    avatarId: {
      type: Number,
      default: 1002,
    },
    deviceId: {
      type: String,
      required: true,
      unique: true,
    },
    isConnected: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
