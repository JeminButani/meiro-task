import React, { useState, useEffect } from "react";

import "./App.css";
import Dashboard from "./components/DriverDetails/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import RevenueChart from "./components/RevenueChart/RevenueChart";
import Navbar from "./components/Navbar/Navbar";
import TripsChart from "./components/TripsChart/TripsChart";
import DriverList from "./components/DriverList/DriverList";
import TripsList from "./components/TripsList/TripsList";
import DriverUpdate from "./components/DriverUpdate/DriverUpdate";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/test", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((i) => {
        setData(i.data);
      });
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route exact path="driver" element={<Dashboard data={data} />} />
        <Route
          exact
          path="revenueChart"
          element={<RevenueChart data={data} />}
        />
        <Route exact path="tripsChart" element={<TripsChart data={data} />} />
        <Route exact path="driverList" element={<DriverList data={data} />} />
        <Route exact path="tripsList" element={<TripsList data={data} />} />
        <Route exact path="driverUpdate" element={<DriverUpdate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
