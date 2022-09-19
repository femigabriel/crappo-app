import React from "react";
const Table = "/images/Table.png";
const quater = "/images/quater.png";

function Price() {
  return (
    <div className="flex pt-40">
      <div className="p-20">
        <h1 className="price-h text-5xl	font-bold leading-10 pb-10 pt-5">
          Grow your profit and track your investments
        </h1>
        <p className="market-p leading-7 pb-3 pt-5">
          Use advanced analytical tools. Clear TradingView charts let you track
          current and historical profit investments.
        </p>
        <button className="btn-more ">Learn More</button>
      </div>
      <div className="">
        <img src={quater} className="o-line" alt="" />
        <img src={Table} className="pr-20 mt-40 " alt="Chart" />
      </div>
    </div>
  );
}

export default Price;
