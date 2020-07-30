import React from 'react'
import { ReactComponent as Icono } from "../iconoMB.svg";

function Header() {
    return (
        <div className="header">
            <Icono fill="#fff"></Icono>
            <h2>Movie Database Searcher</h2>
        </div>
    )
}

export default Header
