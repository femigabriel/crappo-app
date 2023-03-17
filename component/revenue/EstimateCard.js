import React from "react";
const Icon = "/images/Icon.png";
const Icon2 = "/images/Icon2.png";
const Icon3 = "/images/Icon3.png";
import { RightOutlined } from "@ant-design/icons";
import Password from "antd/lib/input/Password";
import Cards from "./Cards";

function EstimateCard() {
  return (
    <div>
      <div className="flex justify-center items-center pb-20">
        <h1 className="trade-h text-black text-4xl leading-10	font-bold pt-20  ">
          Trade securely and market the high growth cryptocurrencies.
        </h1>
      </div>
      <div className="">
        <Cards />
      </div>
    </div>
  );
}

export default EstimateCard;
