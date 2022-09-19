import React from "react";
const Icon = "/images/Icon.png";
const Icon2 = "/images/Icon2.png";
const Icon3 = "/images/Icon3.png";
import { RightOutlined } from "@ant-design/icons";

function MobiEstimateCard() {
  return (
    <div className="p-5">
      <div className="text-center  pb-20">
        <h1 className=" text-black text-4xl	font-bold pt-20  ">
          Trade securely and market the high growth cryptocurrencies.
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col">
          <div className=" w-120 bg-violet-900 rounded-xl p-5 drop-shadow-lg mb-10">
            <div className="icon">
              <img src={Icon} className="" alt="icon" />
            </div>
            <div className="pt-24 text-center ">
              <h1 className="text-4xl font-bold	pb-10 text-white">
                Bitcoin
                <span className="text-2xl text-zinc-200 pl-3	font-medium">
                  BTC
                </span>
              </h1>
              <p className="card-p ">
                Digital currency in which a record of transactions is
                maintained.
              </p>
            </div>
            <div>
              <button className="bg-blue-400 font-medium flex text-center m-5 ml-36 p-5 rounded-3xl text-lg ">
                Start mining
                <RightOutlined className=" text-center bg-white  rounded-full text-sky-500 ml-3 p-1" />
              </button>
            </div>
          </div>
          <div className=" bg-slate-50 rounded-xl p-5 drop-shadow-lg text-black	mb-10">
            <div className="icon">
              <img src={Icon2} className="" alt="icon" />
            </div>
            <div className="pt-24 text-center ">
              <h1 className="text-4xl font-bold	pb-10 text-black">
                Ethereum
                <span className="text-2xl text-zinc-400 pl-3	font-medium">
                  ETH
                </span>
              </h1>
              <p className="card-p text-zinc-500	">
                Blockchain technology to create and run decentralized digital
                applications.
              </p>
            </div>
            <div className="pt-10  text-center">
              <RightOutlined className=" text-center bg-white border text-4xl	rounded-full text-sky-600  p-5" />
            </div>
          </div>
          <div className=" bg-slate-50 rounded-xl p-5 drop-shadow-lg text-black	">
            <div className="icon">
              <img src={Icon3} className="" alt="icon" />
            </div>
            <div className="pt-24 text-center ">
              <h1 className="text-4xl font-bold	pb-10 text-black">
                Litecoin
                <span className="text-2xl text-zinc-400 pl-3	font-medium">
                  LTC
                </span>
              </h1>
              <p className="card-p text-zinc-500">
                Cryptocurrency that enables instant payments to anyone in the
                world.
              </p>
            </div>
            <div className="pt-24 text-center ">
              <RightOutlined className=" text-center bg-white border text-4xl	rounded-full text-sky-600 ml-3 p-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobiEstimateCard;
