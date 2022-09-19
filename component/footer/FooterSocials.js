import React from "react";
import {
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  TwitterOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

function FooterSocials() {
  return (
    <div className="flex justify-between pl-20 pr-20 pt-20 pb-20">
      <h1 className="text-lg">©2021 CRAPPO. All rights reserved</h1>
      <div className="">
        <FacebookOutlined className="socials" />
        <InstagramOutlined className="socials" />
        <YoutubeOutlined className="socials" />
        <TwitterOutlined className="socials" />
        <LinkedinOutlined className="socials" />
      </div>
    </div>
  );
}

export default FooterSocials;
