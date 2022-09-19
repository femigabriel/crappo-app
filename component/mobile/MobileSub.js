import React from "react";
import { Input } from "antd";
function MobileSub() {
  return (
    <div className="p-10">
      <div className="flex justify-between bg-sky-400 p-10 rounded-2xl">
        <div className="flex flex-col p-5">
          <h1 className="text-3xl	font-bold  ">Start mining now</h1>
          <p className="w-60 pb-3 pt-5 ">
            Join now with CRAPPO to get the latest news and start mining now
          </p>
        </div>
        <div className="pt-5">
          <p className="text-white">Enter your email</p>
          <div>
            <Input className=" border-0 bg-inherit border-b-2 pt-2  	" />
          </div>
        </div>
        <div className="pt-5">
          <button className="p-3 bg-white text-black rounded-full">Subscribe</button>
      
        </div>
      </div>
    </div>
  );
}

export default MobileSub;
