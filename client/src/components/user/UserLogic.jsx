import { useState, useEffect } from "react";
import { UserForm } from "./UserForm";
import { v4 as uuidv4 } from "uuid";

export const UserLogic = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("connectifyUser")) ?? {}
  );
  const [avatarsRandom, setAvatarsRandom] = useState([]);

  const generateAvatars = () => {
    const copyAvatarsRandom = [];
    for (let i = 0; i < 46; i++) {
      let avatarObject = {
        id: i,
        selected: false,
      };
      copyAvatarsRandom.push(avatarObject);
    }
    setAvatarsRandom(copyAvatarsRandom);
  };

  const addUser = (username, avatarId) => {
    const newUser = {
      username: username,
      avatarId: avatarId,
      deviceId: user.deviceId ?? uuidv4(),
    };

    setUser(newUser);
    localStorage.setItem("connectifyUser", JSON.stringify(newUser));
  };

  useEffect(() => {
    generateAvatars();
  }, []);

  return (
    <>
      <UserForm
        user={user}
        addUser={addUser}
        avatarsRandom={avatarsRandom}
        setAvatarsRandom={setAvatarsRandom}
      />
    </>
  );
};
