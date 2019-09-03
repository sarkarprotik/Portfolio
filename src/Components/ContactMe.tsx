import React from "react";
import { Typography, Icon } from "antd";
import styled from "styled-components";

const HoverIcon = styled.p`
  color: #000;
  :hover {
    color: #ed1212;
    cursor: pointer;
  }
`;

const { Text, Paragraph, Title } = Typography;

const ContactMe = () => {
  const onClick = () => {};
  const IconFont = Icon.createFromIconfontCN({
    scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js"
  });
  return (
    <div>
      <Title level={2} style={{ color: "#1EA57A" }}>
        Let Us Get in Touch
      </Title>
      <Paragraph copyable style={{ display: "flex", flexDirection: "row" }}>
        <Title level={4} style={{ color: "lightgrey" }}>
          sarkar.protik1@gmail.com
        </Title>
      </Paragraph>
      <div
        style={{
          paddingLeft: 5,

          width: 200,
          justifyContent: "space-around",
          display: "flex",
          flexDirection: "row"
        }}
      >
        <div
          style={{ color: "red" }}
          onClick={() => {
            const url = "https://www.linkedin.com/in/protik-sarkar-2a872b47/";
            window.open(url, "_blank");
          }}
        >
          <Icon type="linkedin" style={{ color: "#1EA57A", fontSize: 35 }} />
        </div>
        <div
          onClick={() => {
            const url = "https://github.com/sarkarprotik";
            window.open(url, "_blank");
          }}
        >
          <Icon type="github" style={{ color: "#1EA57A", fontSize: 35 }} />
        </div>
        <div
          onClick={() => {
            const url = "https://www.instagram.com/protik_s/";
            window.open(url, "_blank");
          }}
        >
          <Icon type="instagram" style={{ color: "#1EA57A", fontSize: 35 }} />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
