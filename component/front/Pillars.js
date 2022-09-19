import React from "react";
const Pillar1 = "/images/Pillar1.png";
const Pillar = "/images/Pillar.png";

function Pillars() {
  return (
    <div className="flex ">
         <img src={Pillar} className="line pt-20" alt="logo" />

      <img src={Pillar1} className="line-2" alt="logo" />
    </div>
  );
}

export default Pillars;
