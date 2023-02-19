import React from "react";
import { Outlet, Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/driver">Drivers Details:</Link>
          </li>
          <li>
            <Link to="/city">City Details: </Link>
          </li>
          <li>
            <Link to="/chart">Chart </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Home;
