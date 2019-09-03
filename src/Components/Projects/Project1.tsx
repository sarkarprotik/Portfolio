import React from "react";
import { Timeline, Typography } from "antd";
import { Tag } from "antd";
import CustomCard2 from "../CustomCard2/CustomCard2";
import { Carousel, Button } from "antd";
const { Title } = Typography;

const Project1 = () => {
  const onClick = () => {
    const url =
      "https://appetize.io/app/rv441pymkgjgv7tv00ywbrxnb8?device=iphone6s&scale=75&orientation=portrait&osVersion=11.4&deviceColor=black";
    window.open(url, "_blank");
  };
  const handleClick = () => {
    const url = "https://github.com/sarkarprotik/IGClone";
    window.open(url, "_blank");
  };
  return (
    <Timeline.Item>
      <h2 style={{ fontSize: "bold", color: "#1DA57A" }}>Instagram Clone</h2>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column"
            }}
          >
            <div>
              <Title
                style={{ color: "lightgrey" }}
                ellipsis={{ rows: 14, expandable: true }}
                level={4}
              >
                This is my attempt at building an Instagram Clone <br></br>
                <br></br>
                The main focus of this application is to prototype a gloridied,
                To-Do app. The project was built using expo SDK for rapid
                Prototyping below. <br></br>
                <br></br>
                Once the basic components were laid out, then native code the
                iOS platform was built using react-native.<br></br>
                <br></br>
                To present the Project Appetize.io was used and apk file was
                uploaded to their servers in order to view the project.
                <br></br>
                <br></br>
                The next phase would be to build a backend with user
                authentication using AWS IAM services and a GraphQL api service
                to retrieve data
                <br></br>
                <br></br>
              </Title>
            </div>
            <div>
              <h4
                style={{
                  marginBottom: 16,
                  color: "white"
                }}
              >
                Technologies
              </h4>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Tag color="green">React-Native</Tag>
                <Tag color="green">Material-UI</Tag>
                <Tag color="green">TypeScript</Tag>
                <Tag color="green">Node.js</Tag>
                <Tag color="green">Expo</Tag>
                <Tag color="green">Appetize</Tag>
                <div onClick={() => handleClick()}>
                  <Tag color="#1EA57A">View Code</Tag>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <iframe
            src={
              "https://appetize.io/embed/rv441pymkgjgv7tv00ywbrxnb8?device=iphonex&scale=50&autoplay=false&orientation=portrait&deviceColor=black"
            }
            style={{
              width: 208,
              height: 435
            }}
            scrolling="no"
            frameBorder="0"
          />
          <Button
            style={{ width: "100%" }}
            onClick={() => onClick()}
            type="primary"
          >
            View Project
          </Button>
        </div>
      </div>
    </Timeline.Item>
  );
};

export default Project1;
