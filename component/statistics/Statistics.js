// import { Statistic } from "antd";
import React from "react";
const Statistic = "/images/Statistic.png";

function Statistics() {
  return (
    <div className="flex  bounce-in">
      <div className="">
        <img src={Statistic} className="Chart " alt="Chart" />
      </div>
      <div className="p-20">
        <h1 className="text-5xl	font-bold leading-10 pb-10 pt-20">
          Detailed Statistics
        </h1>
        <p className="market-p leading-7	pb-3 pt-5">
          View all mining related information in realtime, at any point at any
          location and decide which polls you want to mine in.
        </p>
        <button className="btn-more ">Learn More</button>
      </div>
    </div>
  );
}

export default Statistics;
