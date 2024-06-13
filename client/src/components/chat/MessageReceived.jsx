import dayjs from "dayjs";

export const MessageReceived = ({ message }) => {
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
          Nombre random
          <time className="text-xs opacity-50 mx-2">{dayjs().format('h:m a')}</time>
        </div>
        <div className="chat-bubble">{message}</div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
    </div>
  );
};
