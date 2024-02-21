import React from "react";
import { Link, Outlet } from "react-router-dom";
import redmovie from "../assets/Movie.png";
import "./AuthLayout.css";

const AuthLayout = () => {
  return (
    <div>
      <Link className="redlo" to="/" aria-label="Home">
        <img src={redmovie} alt="redmovie" />
      </Link>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
