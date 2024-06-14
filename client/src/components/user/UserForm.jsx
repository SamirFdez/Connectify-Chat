export const UserForm = ({ avatarsRandom }) => {
  return (
    <>
      <div className="flex flex-col items-center p-12">
        <h1 className="text-2xl md:text-4xl lg:text-5xl pb-4">
          Create a user to start chatting
        </h1>
        <div className="flex flex-col items-center mx-auto w-full max-w-[550px]">
          <label className="form-control w-full pb-4">
            <div className="label">
              <span className="label-text">What is your name?</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            <div className="label">
              <span className="label-text-alt flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                  />
                </svg>
                Do not use inappropriate names
              </span>
            </div>
          </label>
          <h1 className="pb-4">Choose an avatar</h1>
          <div className="grid grid-cols-5 md:grid-cols-6  gap-5">
            {avatarsRandom?.map((avatar, idx) => (
              <div className="avatar" key={`avatar-${idx}`} onClick={""}>
                <div
                  className={`w-16 rounded-full ${
                    !avatar.selected ? "ring ring-primary" : null
                  }`}
                >
                  <img src={`https://api.multiavatar.com/${avatar.id}.png`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
