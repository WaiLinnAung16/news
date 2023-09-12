import React from "react";
import Navbar from "./components/Navbar";
import bgImg from "./assets/100.png";
import News from "./pages/News";
import Layout from "./Layout";

const App = () => {
  return (
    <div
      className=" bg-center bg-cover h-full bg-fixed custom-scrollbar"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <Layout />
    </div>
  );
};

export default App;
