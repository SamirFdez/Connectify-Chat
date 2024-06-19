import User from "../schemas/user.js";
import Message from "../schemas/message.js";

export const createMessage = async (messageReceived) => {
  const query = { deviceId: messageReceived.deviceId };
  const options = {
    projection: { _id: 1 },
  };

  try {
    const user = await User.findOne(query, options);

    if (!user) {
      console.log("User not found");
      return;
    }

    const newMessage = new Message({
      message: messageReceived.message,
      user: user,
    });

    await newMessage.save();

    console.log("Message saved:", newMessage);
  } catch (err) {
    console.log("Oops! Error receiving message:", err);
  }
};
