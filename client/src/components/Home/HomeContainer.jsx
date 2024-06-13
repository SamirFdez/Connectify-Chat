import { useEffect } from "react";
import { io } from "socket.io-client";
import { GeneralChat } from "../chat/GeneralChat";
import { MobileContainer } from "./MobileContainer";

export const HomeContainer = () => {
  useEffect(() => {
    const socket = io("http://localhost:3000/");

    socket.on("connect_error", (err) => {
      console.error(`Connection error: ${err.message}`);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <>
      <div className="flex sm:hidden items-center justify-center w-full h-full px-2 mt-3">
        <div className="flex flex-col justify-between w-full h-[80vh] bg-base-300 rounded-lg p-3">
          <GeneralChat />
        </div>
      </div>
      <div className="hidden sm:flex items-center justify-center w-full md:pt-4 lg:pt-8">
        <MobileContainer />
      </div>
    </>
  );
};
