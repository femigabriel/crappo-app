import React from "react";
import { Input } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

function Calculator() {
  return (
    <div className="flex justify-center items-center">
      <div className="cal-box flex justify-between mt-10 p-10  bg-white  drop-shadow-lg text-black">
        <div>
          <h4 className="cal-flex">Enter your hash rate</h4>
          <Input
            className="cal-input border-0 bg-inherit border-b-2 pt-2"
            placeholder=""
          />
        </div>
        <div className="">
          <div className="flex justify-between">
            <h4 className="cal-flex">TH/s</h4>
            <CaretDownOutlined className="text-gray-400" />
          </div>
          <Input
            className="border-0 bg-inherit border-b-2 pt-2 w-full"
            placeholder=""
          />
        </div>
        <button className="btn-cal">Calculate</button>
      </div>
    </div>
  );
}

export default Calculator;
