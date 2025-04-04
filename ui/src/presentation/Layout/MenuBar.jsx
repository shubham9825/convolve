import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/style.css";

const MenuBar = () => {
  return (
    <div className="menu-bar">
      <div className="logo">ConvolveAi</div>
      <div className="menu-items">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/logout">Logout</Link>
      </div>
    </div>
  );
};

export default MenuBar;
