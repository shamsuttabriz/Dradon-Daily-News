import React from "react";
import SocialLogin from "./SocialLogin";
import FindUsOn from "./FindUsOn";
import Qzonr from "./Qzone";
import Qzone from "./Qzone";

function RightAside() {
  return (
    <div className="space-y-8">
      <SocialLogin />
      <FindUsOn />
      <Qzone />
    </div>
  );
}

export default RightAside;
