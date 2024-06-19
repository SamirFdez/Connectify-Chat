import { Route, Routes } from "react-router-dom";
import { GeneralChat } from "../views/GeneralChat";

export const PrivateRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/general-chat" element={<GeneralChat />} />
      </Routes>
    </>
  );
};
