import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary navbar bg-dark"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link
          className="navbar-brand"
          style={{ fontWeight: "bolder", fontSize: "25px" }}
          to="/"
        >
          Meiro
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/revenueChart">
                RevenueChart
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/driverList">
                DriverList
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tripsChart">
                TripsChart
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/driver">
                DriverDetails
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/city">
                CityDetails
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;