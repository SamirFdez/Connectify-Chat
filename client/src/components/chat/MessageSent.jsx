export const MessageSent = () => {
  return (
    <>
      <div className="chat chat-end w-full">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <div className="chat-header">
          Samir Fdez
          <time className="text-xs opacity-50 mx-2">12:46</time>
        </div>
        <div className="chat-bubble chat-bubble-primary">Ta bien mami</div>
        <div className="chat-footer opacity-50">Seen at 12:46</div>
      </div>
    </>
  );
};
