import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function FindUsOn() {
  return (
    <div>
      <h3 className="font-semibold mb-3">Find Us On</h3>
      <div className="flex flex-col">
        <a
          className="btn btn-xl bg-white hover:bg-white text-lg justify-start border border-base-300 rounded text-gray-400 font-medium hover:border-blue-500"
          href="https://www.facebook.com"
        >
          <span className="text-blue-500 bg">
            <FaFacebook />
          </span>
          Facebook
        </a>
        <a
          className="btn btn-xl bg-white hover:bg-white text-lg justify-start border border-base-300 rounded text-gray-400 font-medium hover:border-violet-500"
          href="https://www.facebook.com"
        >
          <span className="text-violet-800">
            <FaInstagram />
          </span>
          Instagram
        </a>
        <a
          className="btn btn-xl bg-white hover:bg-white text-lg justify-start border border-base-300 rounded text-gray-400 font-medium hover:border-sky-500"
          href="https://www.facebook.com"
        >
          <span className="text-sky-500">
            <FaTwitter />
          </span>
          Twitter
        </a>
      </div>
    </div>
  );
}

export default FindUsOn;
