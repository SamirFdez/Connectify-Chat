import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { GeneralChat } from "../chat/GeneralChat";

export const HomeContainer = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("connectifyUser")) ?? {}
  );
  const socket = io("https://connectifychat.onrender.com/");

  useEffect(() => {
    socket.on("connect", () => {
      socket.emit("user", user);
    });
  }, []);

  return (
    <>
      <div className="flex items-center justify-center w-full h-full px-4 md:px-20 mt-3">
        <div className="flex flex-col justify-between w-full h-[80vh] bg-base-300 rounded-lg p-3">
          <GeneralChat socket={socket} user={user} />
        </div>
      </div>
    </>
  );
};
