import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="root-layout">
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
