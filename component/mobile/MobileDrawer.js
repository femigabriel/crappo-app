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
        <div className="flex justify-between">
          <div className="flex justify-between">
            {/* <div>
              <CloseOutlined className="text-red-600" />
            </div> */}
            <Drawer
              title="Menu"
              placement="right"
              // className="drawer"
              closable={false}
              visible={visible}
              onClose={() => {
                setVisible(false);
              }}
            >
              <p className="text-black text-3xl ">Product</p>
              <p className="text-black text-3xl ">Features</p>
              <p className="text-black text-3xl ">Item Three</p>
              <p className="text-black text-3xl ">About</p>
              <p className="text-black text-3xl ">Contact</p>
            </Drawer>
          </div>
        </div>
      </>
    </div>
  );
}

export default MobileDrawer;
