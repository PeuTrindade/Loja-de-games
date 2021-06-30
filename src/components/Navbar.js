import React from "react";
import "./Navbar.css";

function Navbar(props){

    return(
        <nav className="navbar-container">
          <h3 className="navbar-title">Gamer Shop</h3>
          <hr className="navbar-hr"></hr>
          <ul className="navbar-items-desktop">
            <li className="navbar-item-desktop"><a className="navbar-link-desktop" href="#">Playstation</a></li>
            <li className="navbar-item-desktop"><a className="navbar-link-desktop" href="#">Xbox</a></li>
            <li className="navbar-item-desktop"><a className="navbar-link-desktop" href="#">PC</a></li>
            <li className="navbar-item-desktop"><a className="navbar-link-desktop" href="#">Nintendo Switch</a></li>
            <li className="navbar-item-desktop"><a className="navbar-link-desktop" href="#">Geek</a></li>
            <li className="navbar-item-desktop"><a className="navbar-link-desktop" href="#">Acessórios</a></li>
            <li className="navbar-item-desktop"><a className="navbar-link-desktop" href="#">Celulares</a></li>
            <li className="navbar-item-desktop"><a className="navbar-link-desktop" href="#">Gamer</a></li>
          </ul>
        </nav>
    )
}
export default Navbar;