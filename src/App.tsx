import React, { useState } from "react";

import SidebarLayout from "./Components/SidebarLayout";
import LoadingScreen from "./Components/LoadingScreen/LoadingScreen";

const Loading = () => {
  return (
    <div
      style={{
        backgroundColor: "#002329",
        width: window.innerWidth,
        height: window.innerHeight,
        paddingLeft: window.innerWidth / 2,
        paddingTop: window.innerHeight / 2
      }}
    >
      <LoadingScreen />
    </div>
  );
};

const App: React.FC = () => {
  const [showThis, setShowThis] = useState(<Loading />);

  setTimeout(() => {
    setShowThis(<SidebarLayout />);
  }, 500);
  return <div>{showThis}</div>;
};
export default App;
