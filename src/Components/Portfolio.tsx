import React from "react";
import { Typography } from "antd";
import { Timeline } from "antd";
import { Card } from "antd";

import Project1 from "./Projects/Project1";
import Project2 from "./Projects/Project2";
import Project3 from "./Projects/Project3";
import Project4 from "./Projects/Project4";

const { Title } = Typography;
const { Meta } = Card;

const CustomCard = () => {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
  );
};

const Portfolio = () => {
  return (
    <>
      <Timeline style={{ color: "white" }}>
        <Project1 />
        <Project2 />
        <Project3 />
        <Project4 />
      </Timeline>
    </>
  );
};

export default Portfolio;
