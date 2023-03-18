import React, { useState, useEffect } from "react";

import "./App.css";
import CityDashboard from "./components/CityDashboard";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ChartPage from "./components/ChartPage";
import AllChart from "./components/AllChart";
import TestChart from "./components/testChart";
import Navbar from "./components/Navbar/Navbar";
import TestChart_2 from "./components/TestChart_2";

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
        <Route exact path="driver" element={<Dashboard />} />
        <Route exact path="city" element={<CityDashboard />} />
        <Route exact path="chart" element={<ChartPage />} />
        <Route exact path="allChart" element={<AllChart />} />
        <Route exact path="testchart" element={<TestChart data={data} />} />
        <Route exact path="testchart-2" element={<TestChart_2 data={data} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
