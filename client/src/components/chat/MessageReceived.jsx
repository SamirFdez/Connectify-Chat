export const MessageReceived = () => {
  return (
    <div>
      <div className="chat chat-start w-full">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <div className="chat-header">
          Paola Díaz
          <time className="text-xs opacity-50 mx-2">12:45</time>
        </div>
        <div className="chat-bubble">Vamo a chulearnos</div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
    </div>
  );
};
