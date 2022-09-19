import React from "react";
const Logo = "/images/Logo.png";
const Visa = "/images/Visa.png";
const Mastercard = "/images/Mastercard.png";
const Bitcoin = "/images/Bitcoin.png";

function Footer() {
  return (
    <div className=" pt-40 p-20 flex justify-between">
      <div className="w-40">
        <img src={Logo} className="logo" alt="logo" />
      </div>
      <div className="flex ">
        <div className="pr-10">
          <h1 className="pb-10 footer-h">Quick Link</h1>
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
          <h1 className="pb-10 footer-h pl-3">Resources</h1>
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
      <div>
        <h1 className="footer-pay">We accept following payment systems</h1>
        <div className="pt-10 flex">
          <img src={Visa} className="pr-5" alt="logo" />
          <img src={Mastercard} className="pr-5" alt="logo" />
          <img src={Bitcoin} className="" alt="logo" />
        </div>
      </div>
     
    </div>
  );
}

export default Footer;
