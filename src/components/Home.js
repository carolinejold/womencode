import React from "react";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";

const Home = () => {
  return (
    <div className="home-container">
      <Fade>
        <Pulse>
          <h1 className="home-title">
            Welcome to WomenCode<span className="pink-dot">.</span>se
          </h1>
        </Pulse>
        <h2 className="home-description">
          A space designed to provide resources and inspiration for women who
          code
        </h2>
      </Fade>
    </div>
  );
};

export default Home;
