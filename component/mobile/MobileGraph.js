import React from "react";
import {
  BarChartOutlined,
  UserOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

function MobileGraph() {
  return (
    <div className="flex justify-center items-center pt-20 ">
      <div className="flex flex-col p-20 ">
        <div className="pl-10 pb-20  bounce-in">
          <div className="flex">
            <BarChartOutlined className="graph-icon-mob" />
            <h1 className="text-7xl pt-20 pl-20 font-semibold	">$30B</h1>
          </div>
          <p className="ml-72 text-4xl">Digital Currency Exchanged</p>
        </div>
        <div className="pl-10 pb-20  bounce-in">
          <div className="flex">
            <UserOutlined className="graph-icon-mob" />
            <h1 className="text-7xl pt-20 pl-20 font-semibold	">10M+</h1>
          </div>

          <p className="ml-72 text-4xl">Trusted Wallets Investor</p>
        </div>
        <div className="pl-10 pb-20  bounce-in">
          <div className="flex ">
            <GlobalOutlined className="graph-icon-mob" />
            <h1 className="text-7xl pt-20 pl-20 font-semibold">195</h1>
          </div>
          <p className="ml-72 text-4xl">Countries Supported</p>
        </div>
      </div>
    </div>
  );
}

export default MobileGraph;
