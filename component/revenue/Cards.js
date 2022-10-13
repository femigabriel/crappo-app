import React from "react";
import { motion, useAnimation } from "framer-motion";
function Cards() {
  const items = [
    {
      id: 0,
      image: "/images/Icon.png",
      name: " Bitcoin",
      abbrev: "BTC",
      passage:
        "Digital currency in which a record of transactions is maintained.",
    },
    {
      id: 1,
      image: "/images/Icon2.png",
      name: " Ethereum",
      abbrev: "ETH",
      passage:
        " Blockchain technology to create and run decentralized digital applications.",
    },
    {
      id: 2,
      image: "/images/Icon3.png",
      name: " Litecoin",
      abbrev: "LTC",
      passage:
        " Cryptocurrency that enables instant payments to anyone in the world.",
    },
  ];
  const boxVariant = {
    visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  };
  return (
    <div className="mob-card bounce flex justify-between text-center p-20 ">
      {items.map((list, key) => (
        <motion.div
          variants={boxVariant}
          initial="hidden"
          animate="visible"
          className=" card grow bg-slate-50 rounded-md p-2 mr-10 shadow-md text-black"
        >
          <div className="icon">
            <img src={list.image} className="" alt="" />
          </div>
          <div className="pt-24">
            <div className="text-4xl font-bold pb-10">
              {list.name}

              <span className="text-2xl text-zinc-400 pl-3	font-medium">
                {list.abbrev}
              </span>
            </div>
            <div className="text-center p-5">{list.passage}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Cards;
