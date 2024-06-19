import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";
import { Login } from "../views/Login";

export const AppRouter = () => {
  const [userAuth, setUserAuth] = useState(false);

  useEffect(() => {
    const getUser = localStorage.getItem("connectifyUser");

    if (getUser) {
      setUserAuth(true);
      sessionStorage.setItem("setUserAuth", true);
    }
  }, []);

  console.log(userAuth);

  return (
    <>
      <Routes>
        {userAuth ? (
          <Route path="/*" element={<PrivateRoutes />} />
        ) : (
          <Route path="/" element={<Login />} />
        )}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};
