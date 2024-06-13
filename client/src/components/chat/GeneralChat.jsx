import { useState, useEffect } from "react";
import { MessageReceived } from "./MessageReceived";
// import { MessageSent } from "./MessageSent";
import { MessageBox } from "./MessageBox";

export const GeneralChat = ({ socket }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Manejar la suscripción al evento 'chat message'
    const handleNewMessage = (msg) => {
      setMessages(prevMessages => [...prevMessages, msg]);
      scrollToBottom();
    };

    socket?.on('chat message', handleNewMessage);

    // Limpiar la suscripción cuando el componente se desmonta
    return () => {
      socket?.off('chat message', handleNewMessage);
    };
  }, []);

  // Función para desplazar automáticamente al fondo del contenedor de mensajes
  const scrollToBottom = () => {
    const chatBubble = document.getElementById("chat-bubble");
    if (chatBubble) {
      chatBubble.scrollTop = chatBubble.scrollHeight;
    }
  };

  return (
    <>
      <div id="chat-bubble" className="w-full items-end max-h-[90%] overflow-x-hidden">
        {messages.map((msg, index) => (
          <MessageReceived key={index} message={msg} />
        ))}
      </div>
      <MessageBox socket={socket} />
    </>
  );
};
