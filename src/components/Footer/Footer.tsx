import React from "react";
import BannerFooter from "./Component/BannerFooter/BannerFooter";
import PolicyFooter from "./Component/PolicyFooter/PolicyFooter";
import BottomFooter from "./Component/BottomFooter/BottomFooter";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div>
      <BannerFooter />
      <PolicyFooter />
      <BottomFooter />
    </div>
  );
};

export default Footer;
