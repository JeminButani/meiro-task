import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./home.scss";
import meiroImg from "../../assets/Meiro.png";

const Home = () => {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src={meiroImg} alt="meiro" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>
            Hi There
            <span
              style={{
                color: "crimson",
              }}
            >
              !
            </span>
          </h2>
          <h1>
            Welcome to{" "}
            <b style={{ fontSize: "70px", color: "crimson" }}>Meiro</b>
          </h1>
          <h3> Urban mobility augmented</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
