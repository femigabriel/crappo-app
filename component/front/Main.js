import React from "react";
const Illustration = "/images/Illustration.png";
const Pillar1 = "/images/Pillar1.png";
import { RightOutlined } from "@ant-design/icons";

function Main() {
  return (
    <div className="flex justify-between ">
      <div>
        <div className="flex  pt-10 pb-10 font-semibold">
          <button className="btn-B">
            <span className="btn-A text-#0d0d2b bg-white ">75% Save</span>For
            the Black Friday weekend
          </button>
        </div>
        <div>
          <h1 className="main-content ">
            Fastest & secure platform to invest in crypto
          </h1>
          <p className="main-p">
            Buy and sell cryptocurrencies, trusted by 10M wallets with over $30
            billion in transactions.
          </p>
        </div>
        <div>
          <button className="btn-free flex ">
            Try for FREE
            <RightOutlined className="free text-center bg-white  rounded-full text-sky-500 ml-6 p-1" />
          </button>
        </div>
      </div>
      <div className="">
        <img src={Illustration} className="crypto " alt="logo" />
      </div>
    </div>
  );
}

export default Main;
