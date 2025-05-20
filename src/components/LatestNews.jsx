import React from "react";
import Marquee from "react-fast-marquee";

function LatestNews() {
  return (
    <div className="flex items-center gap-4 p-3 bg-base-200 rounded my-10">
      <p className="text-base-100, bg-secondary px-4 py-2 text-white rounded">
        Latest
      </p>
      <Marquee className="flex gap-5" pauseOnHover={true} speed={50}>
        <p className="font-semibold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae ea
          ipsam facilis similique posimus inventore optio voluptate..
        </p>
        <p className="font-semibold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae ea
          ipsam facilis similique posimus inventore optio voluptate..
        </p>
        <p className="font-semibold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae ea
          ipsam facilis similique posimus inventore optio voluptate..
        </p>
      </Marquee>
    </div>
  );
}

export default LatestNews;
