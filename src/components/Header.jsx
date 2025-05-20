import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";

function Header() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-6">
      <img src={logo} alt="Logo" />
      <p className="text-accent">Journalism withouit Fear or Favour</p>
      <p className="text-accent">
        <span className="font-semibold text-slate-700">
          {format(new Date(), "EEEE, ")}
        </span>
        {format(new Date(), "MMMM MM, yyyy")}
      </p>
    </div>
  );
}

export default Header;
