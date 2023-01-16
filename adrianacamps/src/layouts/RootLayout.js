import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./rootlayout.scss";
import Nav from "../Components/nav/";

function RootLayout() {
  return (
    <div className="root-layout">
      <Outlet />
    </div>
  );
}

export default RootLayout;
