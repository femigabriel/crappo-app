import React from "react";
const Chart = "/images/Chart.png";

function MobileMarket() {
  return (
    <div className="flex flex-col">
      {/* <img src={o} className="o-image" alt="Chart" /> */}
      <div className="flex justify-center items-center ">
        {/* <div className="text-center">
          <h1 className=" font-bold text-4xl pt-20	pb-10  ">
            Market sentiments, portfolio, and run the infrastructure of your
            choice
          </h1>
        </div> */}
      </div>
      <div className="flex flex-col p-20 ">
        <div className="pt-10 text-center ">
          <h1 className="text-5xl	font-bold	leading-10 pb-10	">Invest Smart</h1>
          <p className=" leading-7	pb-3 pt-5">
            Get full statistic information about the behaviour of buyers and
            sellers will help you to make the decision.{" "}
          </p>
          <button className="btn-more ">Learn More</button>
        </div>
        <div className="pt-10">
          <img src={Chart} className="Chart " alt="Chart" />
        </div>
      </div>
    </div>
  );
}

export default MobileMarket;
