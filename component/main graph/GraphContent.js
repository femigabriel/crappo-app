import React from "react";
const main = "/images/main.png";
const D = "/images/D.png";
const u = "/images/u.png";
function GraphContent() {
  return (
    <div className="flex ">
      <img src={main} className="main" alt="" />
      <div className="pt-10 pl-20">
        <img src={D} className="d-line" alt="logo" />

        <h1 className="pt-20 main-h">Why you should choose CRAPPO</h1>
        <p className="main-p">
          Experience the next generation cryptocurrency platform. No financial
          borders, extra fees, and fake reviews.
        </p>

        <button className="btn-more">Learn More</button>
        <img src={u} className="u-line" alt="" />
      </div>
    </div>
  );
}

export default GraphContent;
