import React from "react";
import { Timeline, Typography } from "antd";
import { Tag, Button } from "antd";
import CustomCard2 from "../CustomCard2/CustomCard2";
const { Title } = Typography;

const Project4 = () => {
  const onClick = () => {
    const url = "https://salt-admin.herokuapp.com";
    window.open(url, "_blank");
  };
  return (
    <Timeline.Item>
      <h2 style={{ fontSize: "bold", color: "#1DA57A" }}>Admin Panel</h2>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center"
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <iframe
            src={"https://salt-admin.herokuapp.com"}
            style={{
              width: 400,
              height: 800,
              zoom: 0.5,
              paddingBottom: 20,
              borderRadius: 50
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
                <div
                  style={{
                    color: "red",
                    display: "flex",
                    flexDirection: "column"
                  }}
                >
                  Username: Admin <br></br>Password: secret
                </div>
                The first Project I have worked on. The purpose here was the
                build a fully reactive application that had a seperate front-end
                and back-end <br></br>
                <br></br>
                The application is capable of CRUD. Using REST, MongoDB Atlas as
                the storage of the data.<br></br>
                <br></br>
                This was a well thought out project where I first learned and
                applied the principals of Agile Methodologies. A full Scrum
                Board was maintained and the features were build and measured
                using t shirt sizing <br></br>
                <br></br>
                The most import lesson with this project and something that I
                have taken with me with anything I build now is to spend more
                time on planning than necessary. As the output of the planning
                paid heavy dividends. For example, not only were we as a team
                able to produce the objective outlined but we also managed to
                add more features, and we had more time than needed.
                <br></br>
                <br></br>
                If i had to re-do this project I would have focused more on the
                User Interface and general design of the project
              </Title>
            </div>
            <div>
              <h4 style={{ marginBottom: 16, color: "lightgrey" }}>
                Technologies
              </h4>
              <div>
                <Tag color="green">Mongo</Tag>
                <Tag color="green">Context</Tag>
                <Tag color="green">Express</Tag>
                <Tag color="green">React</Tag>
                <Tag color="green">JavaScript</Tag>
                <Tag color="green">Node.js</Tag>
                <Tag color="green">Atlas</Tag>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </Timeline.Item>
  );
};

export default Project4;
