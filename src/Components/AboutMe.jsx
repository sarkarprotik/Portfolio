import React, { useState } from "react";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const AboutMe = () => {
  const [text, setText] = useState("This is a descriptiona about me");
  const [title, setTitle] = useState("How to Write an Introduction");
  const onChange = string => {
    setText(string);
  };
  return (
    <div>
      <Title style={{ color: "white" }} level={2}>
        This is me
      </Title>
      <div>
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
                justifySelf: "center"
              }}
            />
          </div>
          Hi I am Protik Sarkar and I am based in Stockhom, Sweden. <br></br>
          <br></br>
          Below is a short intro of me. Just Hit Play <br></br>
          <br></br>I build this page so that you as the decision maker can make
          a better judgement of me and my work.
          <br></br>
          <br></br>
          It contains different components that create the above introduction
          "formula," which you can refer to that when you get stuck with your
          own. Below, we've gone into more detail on each component.
        </Title>
      </div>
    </div>
  );
};

export default AboutMe;
