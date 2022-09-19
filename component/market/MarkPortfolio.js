import React from "react";
const Chart = "/images/Chart.png";
const o = "/images/o.png";

function MarkPortfolio() {
  return (
    <div>
    <img src={o} className="o-image" alt="Chart" />
      <div className="flex justify-center items-center">
        <div>
          <h1 className="market-h text-4xl	pb-10">
            Market sentiments, portfolio, and run the infrastructure of your
            choice
          </h1>
        </div>
      </div>
      <div className="flex justify-between p-20 pl-40 pr-40 ">
        <div className="pt-10">
          <h1 className="text-5xl	font-bold	leading-10 pb-10	">Invest Smart</h1>
          <p className="market-p leading-7	pb-3 pt-5">
            Get full statistic information about the behaviour of buyers and
            sellers will help you to make the decision.{" "}
          </p>
          <button className="btn-more ">Learn More</button>
        </div>
        <div className="">
          <img src={Chart} className="Chart " alt="Chart" />
        </div>
      </div>
    </div>
  );
}

export default MarkPortfolio;
