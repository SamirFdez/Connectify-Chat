import dayjs from "dayjs";

export const Message = ({ message, user }) => {
  return (
    <div>
      <div
        className={`chat ${
          message.user?.deviceId === user.deviceId ? "chat-end" : "chat-start"
        } w-full`}
      >
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src={`https://api.multiavatar.com/${message.user?.avatarId}.png`}
            />
          </div>
        </div>
        <div className="chat-header">
          {message.user?.username}
          <time className="text-xs opacity-50 mx-2">
            {dayjs(message.createdAt).format("h:mm a")}
          </time>
        </div>
        <div className="chat-bubble">{message.message}</div>
        {message.user?.deviceId === user.deviceId ? (
          <div className="chat-footer opacity-50">Delivered</div>
        ) : null}
        {/*  */}
      </div>
    </div>
  );
};
