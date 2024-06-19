import mongoose, { Schema } from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    message: String,
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;
