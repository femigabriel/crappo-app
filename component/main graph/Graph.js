import React from "react";

const Pillar = "/images/Pillar.png";
const Pillar1 = "/images/Pillar1.png";
import {
  BarChartOutlined,
  UserOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
const D = "/images/D.png";
function Graph() {
  return (
   
    <div className="pt-40 graph-details pl-40 ">
      {/* <img src={Pillar} className="line pt-20" alt="logo" /> */}
      <div className="bounce flex justify-between pt-10 ">
        <div className="pr-60 ">
          <div className="flex">
            <BarChartOutlined className="graph-icon" />
            <h1 className="text-7xl pt-3 pl-3 font-semibold	">$30B</h1>
          </div>
          <p className=" group-p ">Digital Currency Exchanged</p>
        </div>
        <div className="pr-60 ">
          <div className="flex ">
            <UserOutlined className="graph-icon" />
            <h1 className="text-7xl pt-3 pl-3 font-semibold	">10M+</h1>
          </div>

          <p className="group-p">Trusted Wallets Investor</p>
        </div>
        <div className="pr-60 ">
          <div className="flex ">
            <GlobalOutlined className="graph-icon" />
            <h1 className="text-7xl pt-3 pl-3 font-semibold	">195</h1>
          </div>
          <p className="group-p">Countries Supported</p>
        </div>
      </div>
    </div>
  );
}

export default Graph;
