import React from "react";
import { Header } from "../components/Header/Header";
import { UserLogic } from "../components/user/UserLogic";
import { Footer } from "../components/footer/Footer";

export const Login = () => {
  return (
    <>
      <div className="App">
        <Header />
        <UserLogic />
        <Footer />
      </div>
    </>
  );
};
