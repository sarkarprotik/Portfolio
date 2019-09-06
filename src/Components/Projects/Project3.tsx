import React from "react";
import { Timeline, Typography } from "antd";
import { Tag } from "antd";
import CustomCard3 from "../CustomCard2/CustomCard3";
const { Title } = Typography;

const Project3 = () => {
  return (
    <Timeline.Item>
      <h2 style={{ fontSize: "bold", color: "#1DA57A" }}>Web Shop</h2>
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
                ellipsis={{ rows: 5, expandable: true }}
                level={4}
              >
                This is the first project that had confirmed my need to learn
                programming as a skill. In the attempt to build a webshop I
                noticed while there is a plethora of services available, nothing
                was able to replicate a custom User Interaction as needed.
                <br></br>
                <br></br>
                Although I have used an external service to build this site, I
                learned a lot about Design Thinking principles, which have now
                been translated into my workflow, as this is something that is
                highly needed by a frontend developer. That is to always keep
                the user at the forefront when building products.<br></br>
                <br></br>
                <br></br>
                <br></br>
              </Title>
            </div>
            <div>
              <h4 style={{ marginBottom: 16, color: "white" }}>Technologies</h4>
              <div>
                <Tag color="green">Wix</Tag>
                <Tag color="green">Marvle</Tag>
                <Tag color="green">Figma</Tag>
                <Tag color="green">Cordova</Tag>
                <Tag color="green">Adobe Sketch</Tag>
                <Tag color="green">Zepplin</Tag>
                <Tag color="green">SketchApp</Tag>
              </div>
            </div>
          </div>
        </div>
        <CustomCard3 />
      </div>
    </Timeline.Item>
  );
};

export default Project3;
