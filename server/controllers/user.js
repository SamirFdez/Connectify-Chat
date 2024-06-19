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

export const saveUser = async (user) => {
  try {
    const newUser = new User({
      username: user.username,
      avatarId: user.avatarId,
      deviceId: user.deviceId,
      isConnected: true,
    });

    const result = await newUser.save();
    console.log("User has been save:", result);
  } catch (err) {
    console.log("Oops! error saving user: ", err);
  }
};
