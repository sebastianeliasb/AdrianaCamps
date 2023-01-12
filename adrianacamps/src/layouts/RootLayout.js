import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Nav from "../Components/Nav";
import "./rootlayout.scss";

function RootLayout() {
  return (
    <div className="root-layout">
      <Nav />
      <Outlet />
    </div>
  );
}

export default RootLayout;
