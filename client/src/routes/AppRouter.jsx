import { Routes, Route, Navigate } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";
import { Login } from "../views/Login";
import { useSelector } from "react-redux";

export const AppRouter = () => {
  const userAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      <Routes>
        {userAuth ? <Route path="/*" element={<PrivateRoutes />} /> : null}
        <Route path="/" element={<Login />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};
