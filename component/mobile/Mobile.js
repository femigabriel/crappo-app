import React from "react";
import MobileDrawer from "./MobileDrawer";

const Logo = "/images/Logo.png";

function Mobile() {
  return (
    <div className="mobile-header pt-3 pb-5">
      <div className="flex justify-center items-center">
        <img src={Logo} className="mob-logo" alt="logo" />
      </div>

      <div className=" flex justify-between">
        <div className="flex log-reg pr-10">
          <h3 className=" p-5 text-3xl text-white">Login</h3>
          <div className=" pl-6 text-3xl">
            <button className="p-5 rounded-full bg-sky-400 ">Register</button>
          </div>
        </div>
        <MobileDrawer />
      </div>
    </div>
  );
}

export default Mobile;
