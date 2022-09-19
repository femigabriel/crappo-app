import React from "react";
const Pillarl = "/images/Pillarl.png";
const Pillarr = "/images/Pillarr.png";
function SubPillars() {
  return (
    <div className="flex ">
      <img src={Pillarl} className="line-sub" alt="logo" />

      <img src={Pillarr} className="line-sub-2" alt="logo" />
    </div>
  );
}

export default SubPillars;
