import React from "react";
import "./style/nav.scss";
import NameBox from "../nameBox";
import {Link} from "react-router-dom";

function Nav(props) {
    return (
        <>
            <NameBox
                text={
                    <>
                        {" "}
                        <Link to="/studio">Studio</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/concepts">Concepts for sale</Link>
                        <Link to="/news">News</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/language">Language</Link>
                    </>
                }
                events={props.events || "all"}
                toggleNav={props.toggleNav}
                navClass={"nav-close"}
            />
            <nav className="nav-home"></nav>
        </>
    );
}

export default Nav;
