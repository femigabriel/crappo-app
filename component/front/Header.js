import React from "react";
const Logo = "/images/Logo.png";

function index() {
  return (
    <div className="text-center p-5 flex justify-between">
      <div className="w-40">
        <img src={Logo} className="logo" alt="logo" />
      </div>
      <div></div>
      <div className="flex ">
        <nav className="flex ml-40 ">
          <ul className="items flex text-xl ">
            <li className="mr-20 item ">Product</li>
            <li className="mr-20 item  ">Features</li>
            <li className="mr-20 item ">About</li>
            <li className="item mr-20  ">Contact</li>
          </ul>
        </nav>
        <div className="flex pl-48">
          <h3 className="login pl-3 text-white">Login</h3>
          <div className=" pl-6">
            <button className=" register ">Register</button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default index;
