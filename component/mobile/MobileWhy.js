import React from "react";
const main = "/images/main.png";
function MobileWhy() {
  return (
    <div className="flex flex-col ">
      <div className="flex justify-center items-center ">
        <div className="text-center grow">
          <h1 className="text-5xl font-bold	pb-5">Why you should choose CRAPPO</h1>
          <p className="text-2xl">
            Experience the next generation cryptocurrency platform. No financial
            borders, extra fees, and fake reviews.
          </p>
          <button className="btn-more">Learn More</button>
        </div>
      </div>
      <img src={main} className="" alt="" />
    </div>
  );
}

export default MobileWhy;
