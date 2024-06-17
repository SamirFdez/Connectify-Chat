import { Routes, Route, Navigate } from "react-router-dom";
import { GeneralChat } from "../views/GeneralChat";
import { Login } from "../views/Login";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/general-chat" element={<GeneralChat />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};
