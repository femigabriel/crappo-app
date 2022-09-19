import React from "react";

function GraphHidden() {
  return (
    <div className="pt-40 graph-details  ">
      <div className="flex justify-between pt-10 ">
        <div className="">
          <div className="flex">
            <BarChartOutlined className="graph-icon" />
            <h1 className="text-5xl pt-3 pl-3 font-semibold	">$30B</h1>
          </div>
          <p className="ml-24 mb-10l w-full">Digital Currency Exchanged</p>
        </div>
        <div className="">
          <div className="flex ">
            <UserOutlined className="graph-icon" />
            <h1 className="text-5xl pt-3 pl-3 font-semibold	">10M+</h1>
          </div>

          <p className="ml-24 mb-10l w-full">Trusted Wallets Investor</p>
        </div>
        <div className=" ">
          <div className="flex ">
            <GlobalOutlined className="graph-icon" />
            <h1 className="text-5xl pt-3 pl-3 font-semibold	">195</h1>
          </div>
          <p className="ml-24 mb-10l w-full">Countries Supported</p>
        </div>
      </div>
    </div>
  );
}

export default GraphHidden;
