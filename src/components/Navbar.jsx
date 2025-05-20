import React from "react";
import { NavLink } from "react-router";
import user from "../assets/user.png";

function Navbar() {
  return (
    <div className="max-w-6xl mx-auto flex items-center justify-between">
      <div className="hello">x</div>
      <div className="flex gap-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/carrer">Carrer</NavLink>
      </div>
      <div className="flex gap-4 items-center">
        <img src={user} alt="user" />
        <button className="btn btn-primary px-8">Login</button>
      </div>
    </div>
  );
}

export default Navbar;
