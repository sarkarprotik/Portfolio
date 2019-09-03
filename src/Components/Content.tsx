import React, { useState } from "react";
import { Layout } from "antd";

import { Breadcrumb } from "antd";
import { useEffect } from "react";

const { Content } = Layout;

const CustomContent = ({ whatToShow }: any) => {
  const [showThis, setShowThis] = useState({ data: whatToShow });

  useEffect(() => {
    setShowThis({ data: whatToShow });
  }, [whatToShow]);

  return (
    <div style={{ width: "100%" }}>
      <Content style={{ margin: "0 16px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>
        <div
          style={{
            padding: 15,
            background: "#001528",
            minHeight: window.innerHeight - 33
          }}
        >
          {showThis.data}
        </div>
      </Content>
    </div>
  );
};
export default CustomContent;
