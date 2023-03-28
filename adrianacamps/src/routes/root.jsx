import React from "react"
import Home from "../pages/Home"
import {Outlet} from "react-router-dom";

export default function Root() {
    return (
        <>
            <Home/>
            <Outlet/>
        </>
    )
}