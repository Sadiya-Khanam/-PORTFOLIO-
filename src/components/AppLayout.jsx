import React, { useContext } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import "./AppLayout.css";

const AppLayout = () => {
  const { darkMode } = useContext(ThemeContext); // Dark Mode applied globally

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <nav className="navbar">
        <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
          About
        </NavLink>
        <NavLink to="/portfolio" className={({ isActive }) => (isActive ? "active" : "")}>
          Portfolio
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
          Contact
        </NavLink>
      </nav>

      <main className="main-container">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
