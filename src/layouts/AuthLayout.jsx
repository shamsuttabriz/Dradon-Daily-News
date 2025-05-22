import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

function AuthLayout() {
  return (
    <div className="bg-base-200 min-h-screen">
      <header className="py-3">
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AuthLayout;
