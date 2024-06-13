import { ThemeController } from "./ThemeController";

export const Header = () => {
  return (
    <>
      <div className="navbar bg-base-100 container mx-auto">
        <div className="flex-1">
          <a className="btn btn-ghost hover:bg-transparent text-xl">
            Connectify Chat
          </a>
        </div>
        <div className="flex-none">
          <ThemeController />
        </div>
      </div>
    </>
  );
};
