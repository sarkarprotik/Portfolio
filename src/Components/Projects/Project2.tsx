import React from "react";
import { Timeline, Typography } from "antd";
import { Tag } from "antd";
import CustomCard2 from "../CustomCard2/CustomCard2";
const { Title } = Typography;

const Project2 = () => {
  const handleClick = () => {
    const url = "https://github.com/sarkarprotik/happyapp";
    window.open(url, "_blank");
  };
  return (
    <Timeline.Item>
      <h2 style={{ fontSize: "bold", color: "#1DA57A" }}>Happy X</h2>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center"
        }}
      >
        <CustomCard2 />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: 15
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
                I worked on this project when I was interning.I have shared only
                some of the code in the repo, however the screens that you can
                see are the ones I had worked on. <br></br>
                <br></br>
                The main goals of this project to build a Proof of Concept (POC)
                for the idea. A Product description Specification was provided
                with minimal instructions on the User Interface.
                <br></br>
                <br></br>A rough schematic was agreed upon by the dev team and
                an application a rough build was created in a short time to be
                able to get user feedback as soon as possible.
                <br></br>
                <br></br>
                Key learning on this project was working with multiple
                developers pushing code at the same time. In the future, a
                planned, collaborated effort would be more efficient, in order
                to avoid code clash deployment.
              </Title>
            </div>
            <div>
              <h4 style={{ marginBottom: 16, color: "grey" }}>Technologies</h4>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Tag color="green">Firebase</Tag>
                <Tag color="green">Redux</Tag>
                <Tag color="green">Redux-Thunk</Tag>
                <Tag color="green">Material-UI</Tag>
                <Tag color="green">TypeScript</Tag>
                <Tag color="green">Node.js</Tag>
                <Tag color="green">Expo</Tag>
                <div onClick={() => handleClick()}>
                  <Tag color="#1EA57A">View Code</Tag>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </Timeline.Item>
  );
};

export default Project2;
