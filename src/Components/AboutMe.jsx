import React, { useState } from "react";
import { Typography, Tag } from "antd";

const { Title, Paragraph, Text } = Typography;

const AboutMe = () => {
  const [text, setText] = useState("This is a descriptiona about me");
  const [title, setTitle] = useState("How to Write an Introduction");
  const onChange = string => {
    setText(string);
  };
  return (
    <div>
      <div>
        <Title style={{ color: "#1DA57A" }} level={2}>
          Who I am
        </Title>
        <Title style={{ color: "lightgrey" }} level={4}>
          Just Hit Play <br></br>
        </Title>

        <Title style={{ color: "lightgrey" }} level={4}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/dW4vkHx8IDQ"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video"
              style={{
                width: 700,
                height: 400,
                marginBottom: 20,
                justifySelf: "center"
              }}
            />
          </div>{" "}
          <br></br>
          What do I want? <br></br>
          <br></br>I am looking for a new team, a family to work with in order
          to kick start my career as a
          <Text style={{ color: "#1DA57A" }} code>
            Full Stack Developer
          </Text>
          <br></br>
        </Title>
      </div>
    </div>
  );
};

export default AboutMe;
