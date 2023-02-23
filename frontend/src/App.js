import "./App.css";
import CityDashboard from "./components/CityDashboard";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ChartPage from "./components/ChartPage";
import AllChart from "./components/AllChart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route exact path="driver" element={<Dashboard />} />
        <Route exact path="city" element={<CityDashboard />} />
        <Route exact path="chart" element={<ChartPage />} />
        <Route exact path="allChart" element={<AllChart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
