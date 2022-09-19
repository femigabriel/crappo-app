import React, { useState } from "react";

import { Drawer, Button } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

function MobileDrawer() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <>
        <MenuOutlined
          onClick={() => {
            setVisible(true);
          }}
          style={{
            display: "block",
          }}
          className=" p-3 text-5xl font-bold"
        />
        <div className="">
          <div className="">
            <div className="">
              <Drawer
                title=""
                placement="right"
                className=""
                closable={false}
                visible={visible}
                onClose={() => {
                  setVisible(false);
                }}
              >
                <div className="flex justify-between d-item">
                  <div className="pt-20">
                    <p className=" p-5 p border-b-4 border-sky-400	 text-black text-3xl  font-bold ">
                      Product
                    </p>
                    <p className=" p-5 mt-3 mb-3 text-black text-3xl font-bold ">
                      Features
                    </p>
                    <p className="p-5  mb-3 text-black text-3xl font-bold ">
                      About
                    </p>
                    <p className="p-5 mb-3 text-black text-3xl font-bold ">
                      Contact
                    </p>
                  </div>
                  <CloseOutlined
                    onClick={() => {
                      setVisible(false);
                    }}
                    className="text-slate-500  text-4xl"
                  />
                </div>
              </Drawer>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default MobileDrawer;
