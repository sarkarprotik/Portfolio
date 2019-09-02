import React, { useState } from "react";

import { Layout, Menu, Breadcrumb, Icon, Collapse } from "antd";

import { Avatar } from "antd";

import CustomContent from "./Content";

import Portfolio from "./Portfolio";

import AboutMe from "./AboutMe";

const { Sider } = Layout;
const { SubMenu } = Menu;

const ContactMe = () => {
  return <div>Contact Me</div>;
};

const Project1 = () => {
  return <div>Project1</div>;
};
const Project2 = () => {
  return <div>Project2</div>;
};

const Profile = ({ collapsed }: any) => {
  let size = 150;
  let border = "5px solid lightgrey";
  let name = "Protik Sarkar";
  let title = "Frontend Developer";
  let fontSize = 24;
  if (collapsed) {
    size = 60;
    border = "2px solid lightgrey";
    name = "PS";
    title = "<dev />";
    fontSize = fontSize * 0.95;
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: 20,

          justifyContent: "center"
        }}
      >
        <div
          style={{
            backgroundColor: "purple",
            borderRadius: "50%",
            border: border
          }}
        >
          <Avatar
            shape="circle"
            src={require("../assets/profile.jpg")}
            size={size}
            icon="user"
          />
        </div>
      </div>
      <div
        style={{
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <div style={{ fontSize: fontSize, fontStyle: "bold" }}>{name}</div>
        <div style={{ fontSize: fontSize * 0.6 }}>{title}</div>
      </div>
    </>
  );
};

const SidebarLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [whatToShow, setWhatToShow] = useState(<AboutMe />);

  const onCollapse = (collapsed: boolean) => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "#011c38" }}>
      <Sider
        width={400}
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
      >
        <Profile collapsed={collapsed} />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item
            onClick={() => {
              setWhatToShow(<AboutMe />);
            }}
            key="1"
          >
            <Icon type="folder" />
            <span>About Me</span>
          </Menu.Item>

          <Menu.Item
            onClick={() => {
              setWhatToShow(<Portfolio />);
            }}
            key="8"
          >
            <Icon type="folder" />
            <span>Portfolio</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                <span>Contact Me</span>
              </span>
            }
          >
            <Menu.Item onClick={() => setWhatToShow(<Project1 />)} key="3">
              Email
            </Menu.Item>
            <Menu.Item onClick={() => setWhatToShow(<Project2 />)} key="4">
              Call
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <CustomContent whatToShow={whatToShow} />
      <Layout style={{ backgroundColor: "#011c38" }}></Layout>
    </Layout>
  );
};

export default SidebarLayout;
