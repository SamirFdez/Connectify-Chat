import { useState, useEffect } from "react";
import { Message } from "./Message";
import { MessageBox } from "./MessageBox";
import { Loading } from "../loading/Loading";

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
      setTimeout(() => {
        scrollToBottom();
      }, 500);
    });
  }, []);

  return (
    <>
      {allMessages.length ? (
        <div className="flex flex-col justify-between w-full h-[80vh] bg-base-300 rounded-lg p-3">
          <div
            id="chat-bubble"
            className="w-full items-end max-h-[90%] overflow-x-hidden"
          >
            {allMessages?.map((msg) => (
              <Message key={msg._id} message={msg} user={user} />
            ))}
          </div>
          <MessageBox socket={socket} />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};
