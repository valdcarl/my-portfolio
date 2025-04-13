import React from "react"

import "./Navbar.css"

function Navbar() {
    return (
        <nav className="navbar--main">
            <div className="navbar--logo">
                CARLOS VALDEZ
            </div>
            <ul className="navbar--itemlinks">
                <li><a href="#hero">Home</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar