import React from "react"
import Home from "../pages/Home"
import { Outlet } from "react-router-dom";
import Comming from "../pages/CommigSoon/Coming";
export default function Root() {
    return(
<>
<Comming/>
<Outlet/>
</>
    )
}