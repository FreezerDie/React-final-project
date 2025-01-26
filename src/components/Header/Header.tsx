import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./headerStyle.css";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="logo" onClick={() => navigate("/")}>
        <img src="https://foodspin.vercel.app/images/logo.svg" alt="" />
      </div>
      <ul className="nav">
        <Link to="/breakfast">Breakfast</Link>
        <Link to="/lunch">Lunch</Link>
        <Link to="/dinner">Dinner</Link>
      </ul>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </header>
  );
};

export default Header;
