import React from "react";
const Statistic = "/images/Statistic.png";
const Table = "/images/Table.png";
function MobileStats() {
  return (
    <div className="flex flex-col">
      <div className="">
        <img src={Statistic} className="Chart " alt="Chart" />
      </div>
      <div className="text-center p-20">
        <h1 className="text-5xl	font-bold leading-10 pb-10 pt-20">
          Detailed Statistics
        </h1>
        <p className=" leading-7	pb-3 pt-5">
          View all mining related information in realtime, at any point at any
          location and decide which polls you want to mine in.
        </p>
        <button className="btn-more ">Learn More</button>
      </div>
      <div className="pr-10">
        <img src={Table} className="pr-20 w-full " alt="Chart" />
      </div>
      <div className="text-center p-20">
        <h1 className="text-center text-5xl	font-bold leading-10 pb-10 pt-5">
          Grow your profit and track your investments
        </h1>
        <p className=" leading-7 pb-3 pt-5">
          Use advanced analytical tools. Clear TradingView charts let you track
          current and historical profit investments.
        </p>
        <button className="btn-more ">Learn More</button>
      </div>
    </div>
  );
}

export default MobileStats;
