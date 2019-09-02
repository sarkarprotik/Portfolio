import React from "react";
import { Timeline, Typography } from "antd";
import { Tag } from "antd";
import CustomCard2 from "../CustomCard2/CustomCard2";
const { Title } = Typography;

const Project4 = () => {
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
                ellipsis={{ rows: 5, expandable: true }}
                level={4}
              >
                To write an introduction, be mindful of what it's supposed to
                achieve. The main goals here are to draw in your reader -- a
                relative stranger, most of the time -- and concisely let her
                know what the article is about. Generally, that consists of
                three key components: <br></br>
                <br></br>
                Step 1 Grab the reader's attention. That looks different for
                every piece of writing, but we've provided some suggestions
                below. <br></br>
                <br></br>
                Step 2 Present the reason for the post's existence. <br></br>
                <br></br>
                Step 3 Explain how the post will help address the problem that
                brought your reader to it. As a lover of all things meta, I
                will, of course, use this post's introduction as an example of
                how to write an intro.
                <br></br>
                <br></br>
                It contains different components that create the above
                introduction "formula," which you can refer to that when you get
                stuck with your own. Below, we've gone into more detail on each
                component.
              </Title>
            </div>
            <div>
              <h4 style={{ marginBottom: 16, color: "white" }}>Technologies</h4>
              <div>
                <Tag color="green">React-Native</Tag>
                <Tag color="green">Material-UI</Tag>
                <Tag color="green">TypeScript</Tag>
                <Tag color="#1DA57A">Node.js</Tag>
                <Tag color="green">Expo</Tag>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Timeline.Item>
  );
};

export default Project4;
