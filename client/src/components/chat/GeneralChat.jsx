import { useEffect } from "react";
import { MessageReceived } from "./MessageReceived";
import { MessageSent } from "./MessageSent";
import { MessageBox } from "./MessageBox";
export const GeneralChat = () => {
  useEffect(() => {
    const chatBubble = document.getElementById("chat-bubble");
    chatBubble.scrollTop = chatBubble.scrollHeight;
  }, []);

  return (
    <>
      <div
        id="chat-bubble"
        className="w-full items-end max-h-[90%] overflow-x-hidden"
      >
        <MessageReceived />
        <MessageSent />
        <MessageReceived />
        <MessageSent />
        <MessageReceived />
        <MessageSent />
      </div>
      <MessageBox />
    </>
  );
};
