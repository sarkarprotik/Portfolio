import React from "react";

import { Carousel, Button } from "antd";

import "./styles.css";

const CustomCard3 = () => {
  const onClick = () => {
    const url = "https://www.aquariumponics.com";
    window.open(url, "_blank");
  };

  return (
    <div
      style={{
        maxWidth: 220,
        justifyItems: "space-evenly"
      }}
    >
      <div>
        <Carousel autoplay>
          <img src={require("../../assets/wix1.png")} />
          <img src={require("../../assets/wix2.png")} />
          <img src={require("../../assets/wix3.png")} />
        </Carousel>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          paddingTop: 10,
          paddingBottom: 10,
          width: "100%",
          justifyContent: "space-around"
        }}
      >
        <Button
          style={{ width: "100%" }}
          onClick={() => onClick()}
          type="primary"
        >
          View Project
        </Button>
      </div>
    </div>
  );
};

export default CustomCard3;
