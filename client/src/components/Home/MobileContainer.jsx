import { GeneralChat } from "../chat/GeneralChat";

export const MobileContainer = () => {
  return (
    <>
      <div className="mockup-phone">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-1 md:phone-3 justify-between pt-9 pb-2 px-3">
            <GeneralChat />
          </div>
        </div>
      </div>
    </>
  );
};
