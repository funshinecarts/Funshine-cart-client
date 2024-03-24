import React from "react";
import Logo from "../../assets/funshine_carts_logo.jpg";
import { Facebook, Twitter, Instagram } from "@mui/icons-material"; // Import Material-UI icons
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__header">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="social-icons">
          <Facebook />
          <Twitter />
          <Instagram />
        </div>
      </div>
      <ul className="navLinks">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/listing">All Listings</a>
        </li>
        <li>
          <a href="/listing/new">New Carts</a>
        </li>
        <li>
          <a href="/listing/used">Used Carts</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
