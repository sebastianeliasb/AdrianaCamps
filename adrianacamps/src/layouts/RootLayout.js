import React from "react";
import {Outlet} from "react-router-dom";
import "./rootlayout.scss";

function RootLayout() {
    return (
        <div className="root-layout">
            <Outlet/>
        </div>
    );
}

export default RootLayout;
