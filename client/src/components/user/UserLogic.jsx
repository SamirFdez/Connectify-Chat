import { useState, useEffect } from "react";
import { UserForm } from "./UserForm";

export const UserLogic = () => {
    const [user, setUser] = useState({})
    const [avatarsRandom, setavatarsRandom] = useState([]);

    const generateAvatars = () => {
      const copyAvatarsRandom = [];
      for (let i = 0; i < 23; i++) {
        let avatarObject = {
          id: Math.floor(Math.random() * 1000),
          selected: false,
        };
        copyAvatarsRandom.push(avatarObject);
      }
      setavatarsRandom(copyAvatarsRandom);
    };

    const addUser = (name, idAvatar) => {
        // Body of the arrow function
    };
  
    useEffect(() => {
      generateAvatars();
    }, []);
    
  return (
    <>
        <UserForm avatarsRandom={avatarsRandom} />
    </>
  )
}
