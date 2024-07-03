import React from "react";
import Lottie from "lottie-react";
import animation from "../../assets/loadingChat.json";

export const Loading = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-full">
        <Lottie animationData={animation} />
        <h1 className="text-neutral-content md:text-3xl text-xl">
          Loading messages...
        </h1>
      </div>
    </>
  );
};
