import React from "react";
const Illustration = "/images/Illustration.png";
import { RightOutlined } from "@ant-design/icons";

function MobileHeader() {
  return (
    <div className="flex justify-between pt-5">
      <div className="flex flex-col">
        <div className="p-10 text-center">
          <h1 className="text-7xl font-bold pb-5">
            Fastest & secure platform to invest in crypto.
          </h1>
          <p className="p-5 text-3xl ">
            Buy and sell cryptocurrencies, trusted by 10M wallets with over $30
            billion in transactions.
          </p>
        </div>
        <div className="p-5">
          <img src={Illustration} className=" illus-mob" alt="logo" />
        </div>
        <div className="flex justify-center items-center pt-10">
          <button className="btn-free flex ">
            Try for FREE
            <RightOutlined className=" text-center bg-white  rounded-full text-sky-500 ml-6 p-1" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MobileHeader;
