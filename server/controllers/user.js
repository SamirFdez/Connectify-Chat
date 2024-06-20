import User from "../schemas/user.js";

export const updateOrCreateUser = async (user) => {
  try {
    const query = { deviceId: user.deviceId };
    const updateFields = { ...user, isConnected: true };

    const result = await User.findOneAndUpdate(query, updateFields, {
      new: true,
      upsert: true,
    });
  } catch (err) {
    console.log("Oops! error updating user: ", err);
  }
};

export const userDisconnect = async (user) => {
  try {
    const query = { deviceId: user };
    const updateFields = { isConnected: false };

    const result = await User.findOneAndUpdate(query, updateFields);
  } catch (err) {
    console.log("Oops! error updating user: ", err);
  }
};
