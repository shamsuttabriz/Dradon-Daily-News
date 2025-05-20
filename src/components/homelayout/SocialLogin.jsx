import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

function SocialLogin() {
  return (
    <div>
      <h2 className="font-semibold mb-3">Login With</h2>
      <div className="space-y-2">
        <button className="w-full btn btn-outline btn-secondary">
          <FaGoogle /> Login with Google
        </button>
        <button className="w-full btn btn-outline btn-primary">
          <FaGithub /> Login with Github
        </button>
      </div>
    </div>
  );
}

export default SocialLogin;
