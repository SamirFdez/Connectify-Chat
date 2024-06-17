import { io } from "socket.io-client";
import { GeneralChat } from "../chat/GeneralChat";

export const HomeContainer = () => {
  const socket = io("http://localhost:3000/");

  return (
    <>
      <div className="flex items-center justify-center w-full h-full px-2 mt-3">
        <div className="flex flex-col justify-between w-full h-[80vh] bg-base-300 rounded-lg p-3">
          <GeneralChat socket={socket} />
        </div>
      </div>
    </>
  );
};
