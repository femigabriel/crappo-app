import React from "react";

function MobileEstimate() {
  return (
    <div className="flex justify-center items-center">

        <div className="mob-cal-box-2 flex flex-col justify-between  bg-white  p-2 drop-shadow-lg text-black">
          <h3 className="estimate-h font-medium	">ESTIMATED 24 HOUR REVENUE:</h3>
          <h4 className="estimate-numb font-bold">
            0.055 130 59 ETH
            <span>($1275)</span>
            <p className="text-zinc-400">
              Revenue will change based on mining difficulty and Ethereum price.
            </p>
          </h4>
        </div>
      </div>
   
  );
}

export default MobileEstimate;
