import { useState, useEffect } from "react";
import {Message} from "./Message"
import { MessageBox } from "./MessageBox";

export const GeneralChat = ({ socket, user }) => {
  const [allMessages, setAllMessages] = useState([]);

  const scrollToBottom = () => {
    const chatBubble = document.getElementById("chat-bubble");
    if (chatBubble) {
      chatBubble.scrollTop = chatBubble.scrollHeight;
    }
  };

  useEffect(() => {
    socket.emit("chat message");

    socket.on("chat message", (messages) => {
      setAllMessages(messages);
      scrollToBottom();
    });
  }, []);

  return (
    <>
      <div
        id="chat-bubble"
        className="w-full items-end max-h-[90%] overflow-x-hidden"
      >
        {allMessages?.map((msg) => (
          <Message key={msg._id} message={msg} user={user} />
        ))}
      </div>
      <MessageBox socket={socket} />
    </>
  );
};
