import React from "react";
const Illustration = "/images/Illustration.png";
const Pillar1 = "/images/Pillar1.png";
import { RightOutlined } from "@ant-design/icons";
import BtnSave from "./BtnSave";
import { motion } from "framer-motion";

function Main() {
  return (
    <div className="flex justify-between ">
      <div>
        <div className="pt-20 ">
          <BtnSave className="" />
          {/* <motion.h1 className="main-content pt-10 ">
            Fastest & secure platform to invest in crypto
          </motion.h1> */}
          <motion.h1
            className="main-content pt-10  bounce-in"
            animate={{ x: 10 }}
            initial={{ x: 0 }}
            // className="box"
          >
            Fastest & secure platform to invest in crypto
          </motion.h1>
          {/* <ScrollAnimation animateIn="wobble" initiallyVisible={true}>
            <h1 className="main-content pt-10 ">
              Fastest & secure platform to invest in crypto
            </h1>
          </ScrollAnimation> */}

          <p className="main-p">
            Buy and sell cryptocurrencies, trusted by 10M wallets with over $30
            billion in transactions.
          </p>
        </div>
        <div>
          <button className="btn-free flex ">
            Try for FREE
            <RightOutlined className="free text-center bg-white  rounded-full text-sky-500 ml-6 p-1" />
          </button>
        </div>
      </div>
      <div className="">
        <motion.img
          className="crypto"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          src={Illustration}
          // className="crypto "
          alt="logo"
        />
        {/* <img src={Illustration} className="crypto " alt="logo" /> */}
      </div>
    </div>
  );
}

export default Main;
