import React from "react";
import { Header } from "../components/Header/Header";
import { HomeContainer } from "../components/Home/HomeContainer";
import { Footer } from "../components/footer/Footer";

export const GeneralChat = () => {
  return (
    <>
      <div className="App">
        <Header />
        <HomeContainer />
        <Footer />
      </div>
    </>
  );
};
