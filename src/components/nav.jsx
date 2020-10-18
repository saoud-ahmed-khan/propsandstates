import React from 'react'
import "./nav.css"

export const Nav = () => {
    return (
        <div>
             <header className="header">
                <a href="/" className="logo"> SPA </a>
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" for="menu-btn"><span className="nav-icon"></span></label>
                <ul className="menu">
                    <li><a href="#" >Be Kind</a></li>
                    <li><a href="#" > Be Assertive</a></li>
                    <li><a href="#" >Be Listen</a></li>
                    <li><a href="#" >Be Connect</a></li>
                    <li><a href="#" >Be Responsible</a></li>
                </ul>
            </header>
        </div>
    )
}
