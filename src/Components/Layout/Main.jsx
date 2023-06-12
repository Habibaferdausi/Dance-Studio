import React from "react";
import Nav from "../Shared/Nav";
import { Outlet } from "react-router-dom";
import FooterSection from "../Shared/Footer";

const Main = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
      <FooterSection></FooterSection>
    </div>
  );
};

export default Main;
