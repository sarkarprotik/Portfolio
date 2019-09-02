import React from "react";

import { Carousel, Button } from "antd";

import "./styles.css";

const CustomCard2 = () => {
  const onClick = () => {
    const url =
      "https://appetize.io/app/rv441pymkgjgv7tv00ywbrxnb8?device=iphone6s&scale=75&orientation=portrait&osVersion=11.4";
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
          <img
            style={{ height: 200 }}
            src={require("../../assets/undraw3.png")}
          />
          <img src={require("../../assets/undraw2.svg")} />
          <img src={require("../../assets/undraw.svg")} />
          <img src={require("../../assets/profile.jpg")} />
          <img src={require("../../assets/flower.jpg")} />
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
        {/* <Button onClick={() => onClick()} type="primary">
          {"<Code />"}
        </Button> */}
        <Button style={{ width: "100%" }} type="primary">
          View Project
        </Button>
      </div>
    </div>
  );
};

export default CustomCard2;
