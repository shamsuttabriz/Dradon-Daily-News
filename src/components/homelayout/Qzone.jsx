import React from "react";
import Swimming from "../../assets/swimming.png";
import Class from "../../assets/class.png";
import Playgrond from "../../assets/playground.png";

function Qzone() {
  return (
    <div className="bg-base-200 px-4 py-5 rounded">
      <h3 className="font-semibold mb-3">Q-Zone</h3>
      <div className="flex flex-col gap-4">
        <img src={Swimming} alt="" />
        <img src={Class} alt="" />
        <img src={Playgrond} alt="" />
      </div>
    </div>
  );
}

export default Qzone;
