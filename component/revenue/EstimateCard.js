import React from "react";
const Icon = "/images/Icon.png";
const Icon2 = "/images/Icon2.png";
const Icon3 = "/images/Icon3.png";
import { RightOutlined } from "@ant-design/icons";

function EstimateCard() {
  return (
    <div>
      <div className="text-center pl-80 pb-20">
        <h1 className="trade-h text-black text-6xl	font-bold pt-20  ">
          Trade securely and market the high growth cryptocurrencies.
        </h1>
      </div>

      <div className="flex justify-between text-center p-20">
        <div className="card-1 bg-violet-900 rounded-md p-2 shadow-2xl">
          <div className="icon">
            <img src={Icon} className="" alt="icon" />
          </div>
          <div className="pt-24">
            <h1 className="text-4xl font-bold	pb-10">
              Bitcoin
              <span className="text-2xl text-zinc-200 pl-3	font-medium">
                BTC
              </span>
            </h1>
            <p className="card-p ">
              Digital currency in which a record of transactions is maintained.
            </p>
          </div>
          <div className="flex justify-center items-center pb-10">
            <button className="btn-start bg-blue-400 font-medium flex text-center m-5 p-5 rounded-3xl text-lg ">
              Start mining
              <RightOutlined className=" text-center bg-white  rounded-full text-sky-500 ml-3 p-1" />
            </button>
          </div>
        </div>
        <div className="card bg-slate-50 rounded-md p-2 shadow-2xl text-black	">
          <div className="icon">
            <img src={Icon2} className="" alt="icon" />
          </div>
          <div className="pt-20">
            <h1 className="text-4xl text-black font-bold	pb-10">
              Ethereum
              <span className="text-2xl text-zinc-200 pl-3	font-medium">
                ETH
              </span>
            </h1>
            <p className="card-p text-zinc-500	">
              Blockchain technology to create and run decentralized digital
              applications.
            </p>
          </div>
          <div className="pt-10 flex justify-center items-center">
            <RightOutlined className="card-icon text-center bg-white border text-xl text-sky-600  p-5 pt-6" />
          </div>
        </div>
        <div className="card bg-slate-50	rounded-md p-2 shadow-2xl text-black">
          <div className="icon">
            <img src={Icon3} className="" alt="icon" />
          </div>
          <div className="pt-20">
            <h1 className="text-4xl text-black font-bold	pb-10">
              Litecoin
              <span className="text-2xl text-zinc-200 pl-3	font-medium">
                LTC
              </span>
            </h1>
            <p className="card-p text-zinc-500">
              Cryptocurrency that enables instant payments to anyone in the
              world.
            </p>
          </div>
          <div className="pt-10">
            <RightOutlined className="card-icon  text-center bg-white border text-xl	rounded-full text-sky-600 ml-3 p-5 pt-6" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EstimateCard;
