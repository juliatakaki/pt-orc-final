import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"

export default function Navbar(){
    return(
        <nav>
            <div>
                <img src="../../images/Logo.png" alt="" />
            </div>
            <ul>
                <li><Link to="../../Menu">Nosso Cardápio!</Link></li>
                <li><Link to="">Login Administrador</Link></li>
                <li><Link to="../../Login" className="cliente">Login Cliente!</Link></li>
            </ul>
        </nav>
    )
}