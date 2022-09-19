import React from "react";
import { Input } from "antd";
const B = "/images/B.png";
const Hector = "/images/Hector.png";
const left = "/images/left.png";
const right = "/images/right.png";
function Subscribe() {
  return (
    <div className="p-20">
      <img src={Hector} className="hector" alt="" />
      <div className="subscribe p-10 pl-20 pr-20 flex justify-between ">
        <div className="flex flex-col">
          <h1 className="text-5xl	font-bold leading-10 p-5 ">
            Start mining now
          </h1>
          <p className="sub-p leading-7	pb-3 pt-5">
            Join now with CRAPPO to get the latest news and start mining now
          </p>
        </div>
        <div className="pt-5">
          <p className="text-white">Enter your email</p>
          <div>
            <Input className="email-input border-0 bg-inherit border-b-2 pt-2  	" />
          </div>
        </div>
        <div className="pt-5">
          <button className="btn-sub rounded-full">Subscribe</button>
          <img src={B} className="b-image" alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
