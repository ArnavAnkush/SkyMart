import {
  RiArrowRightUpLine,
  RiBox3Fill,
  RiPriceTagLine,
  RiStarSLine,
} from "@remixicon/react";
import React from "react";

const InfoCard = () => {
  let info = [
    { left: <RiBox3Fill />, title: "Cart Items", para: "In your bag" },
    {
      left: <RiArrowRightUpLine />,
      title: "Cart Value",
      para: "Ready to checkout",
    },
    { left: <RiStarSLine />, title: "Top Products", para: "High rated" },
    { left: <RiPriceTagLine />, title: "Categories", para: "To explore" },
  ];
  return (
    <div>
      <div>{info.left}</div>
      <div>
        <h4></h4>
        <p>{info.title}</p>
        <p>{info.para}</p>
      </div>
    </div>
  );
};

export default InfoCard;
