import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

function Navbar() {
  const {user} = use(AuthContext);

  return (
    <div className="max-w-6xl mx-auto flex items-center justify-between">
      <div className="font-semibold">{user && user.email}</div>
      <div className="flex gap-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/carrer">Carrer</NavLink>
      </div>
      <div className="flex gap-4 items-center">
        <img src={userIcon} alt="user" />
        <Link to="/auth/login" className="btn btn-primary px-8">Login</Link>
      </div>
    </div>
  );
}

export default Navbar;
