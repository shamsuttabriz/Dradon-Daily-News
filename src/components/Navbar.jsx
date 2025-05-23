import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

function Navbar() {
  const { user, signOutUser } = use(AuthContext);
  console.log(user);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        alert("Sign out successfully");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="max-w-6xl mx-auto flex items-center justify-between">
      <div className="font-semibold">{user && user.displayName}</div>
      <div className="flex gap-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/carrer">Carrer</NavLink>
      </div>
      <div className="flex gap-4 items-center">
        <img className="w-10 h-10 object-cover rounded-full" src={user ? user.photoURL : userIcon} alt="user" />
        {user ? (
          <button onClick={handleSignOut} className="btn btn-primary px-8">
            LogOut
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-8">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
