import { useState, useEffect } from "react";
import { MessageReceived } from "./MessageReceived";
// import { MessageSent } from "./MessageSent";
import { MessageBox } from "./MessageBox";

export const GeneralChat = ({ socket }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Manejar la suscripción al evento 'chat message'
    const handleNewMessage = (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
      scrollToBottom();
    };

    socket?.on("chat message", handleNewMessage);

    // Limpiar la suscripción cuando el componente se desmonta
    return () => {
      socket?.off("chat message", handleNewMessage);
    };
  }, []);

  // Función para desplazar automáticamente al fondo del contenedor de mensajes
  const scrollToBottom = () => {
    const chatBubble = document.getElementById("chat-bubble");
    if (chatBubble) {
      chatBubble.scrollTop = chatBubble.scrollHeight;
    }
  };
  console.log(messages);

  return (
    <>
      <div
        id="chat-bubble"
        className="w-full items-end max-h-[90%] overflow-x-hidden"
      >
        {messages.map((message, index) => (
          <MessageReceived key={index} message={message} />
        ))}
      </div>
      <MessageBox socket={socket} />
    </>
  );
};
