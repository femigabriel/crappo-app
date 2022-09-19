import React from "react";
const Logo = "/images/Logo.png";
const Visa = "/images/Visa.png";
const Mastercard = "/images/Mastercard.png";
const Bitcoin = "/images/Bitcoin.png";

function MobileFooter() {
  return (
    <div className="p-10 flex justify-between">
      <div className="pr-10">
        <img src={Logo} className="mob-logo" alt="logo" />
      </div>
      <div className="flex ">
        <div className="">
          <h1 className="pb-10 text-2xl w-40 ">Quick Link</h1>
          <nav className="">
            <ul className="footer-lists">
              <li>Home</li>
              <li>Products</li>
              <li>About</li>
              <li>Features</li>
              <li>Contacts</li>
            </ul>
          </nav>
        </div>
        <div className="pl-10">
          <h1 className="pb-10 text-2xl">Resources</h1>
          <nav className="mr-10">
            <ul className="footer-lists ">
              <li>Download Whitepapper</li>
              <li>Smart Token</li>
              <li>Blockchain Explorer</li>
              <li>Crypto API</li>
              <li>Interest</li>
            </ul>
          </nav>
        </div>
      </div>
      {/* <div>Hey</div> */}
      <div className="pl-5 ">
        <h1 className="text-2xl w-72 pl-14">We accept following payment systems</h1>
        <div className="pt-10  flex flex-col pl-20">
          <img src={Visa} className="pr-5 pb-5 w-44" alt="" />
          <img src={Mastercard} className="pr-5 pb-5 w-44" alt="" />
          <img src={Bitcoin} className="pr-5 w-44" alt="" />
        </div>
      </div>
    </div>
  );
}

export default MobileFooter;
