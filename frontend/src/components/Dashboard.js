import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Chart from "./Charts";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [allTripsTemp, setAllTripsTemp] = useState([]);
  const [allRevenueTemp, setAllRevenueTemp] = useState([]);
  var allMonths = [];

  useEffect(() => {
    fetch("http://localhost:5000/totalDrivers", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((i) => {
        setData(i.data);
      });
    fetch("http://localhost:5000/allMonths", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((i) => {
        setAllData(i.data);
      });
  }, []);

  for (let x in allData) {
    allMonths.push(allData[x].name);
  }
  const total = (arr) => {
    var sum = 0;
    for (let i in arr) sum += arr[i];
    return sum;
  };

  return (
    <div>
      <div>
        <label
          htmlFor="Driver"
          style={{ fontSize: "30px", fontWeight: "bolder" }}
        >
          Choose a Driver:{" "}
        </label>

        <select
          name="Driver"
          id="Driver"
          style={{ fontSize: "30px", fontWeight: "bold" }}
        >
          <option value="sohan">sohan</option>
          <option value="ruchit">Ruchit</option>
          <option value="jemin">jemin</option>
          <option value="yash">Yash</option>
          <option value="jugal">jugal</option>
          <option value="devansh">devansh</option>
          <option value="jatin">jatin</option>
          <option value="sachin">sachin</option>
          <option value="malay">malay</option>
          <option value="vivek">vivek</option>
        </select>
        <button
          style={{
            background: "#FCFC",
            fontSize: "20px",
            borderRadius: "5px",
            marginLeft: "5px",
          }}
          onClick={() => {
            var allTrips = [];
            var allRevenue = [];
            var temp = document.getElementById("Driver").value;
            if (temp === "sohan") {
              for (let x in allData) {
                allTrips.push(allData[x].sohan.trips);
                allRevenue.push(allData[x].sohan.revenue);
              }
              setAllTripsTemp(allTrips);
              setAllRevenueTemp(allRevenue);
            } else if (temp === "ruchit") {
              for (let x in allData) {
                allTrips.push(allData[x].ruchit.trips);
                allRevenue.push(allData[x].ruchit.revenue);
              }
              setAllTripsTemp(allTrips);
              setAllRevenueTemp(allRevenue);
            } else if (temp === "jemin") {
              for (let x in allData) {
                allTrips.push(allData[x].jemin.trips);
                allRevenue.push(allData[x].jemin.revenue);
              }
              setAllTripsTemp(allTrips);
              setAllRevenueTemp(allRevenue);
            } else if (temp === "yash") {
              for (let x in allData) {
                allTrips.push(allData[x].yash.trips);
                allRevenue.push(allData[x].yash.revenue);
              }
              setAllTripsTemp(allTrips);
              setAllRevenueTemp(allRevenue);
            } else if (temp === "jugal") {
              for (let x in allData) {
                allTrips.push(allData[x].jugal.trips);
                allRevenue.push(allData[x].jugal.revenue);
              }
              setAllTripsTemp(allTrips);
              setAllRevenueTemp(allRevenue);
            } else if (temp === "devansh") {
              for (let x in allData) {
                allTrips.push(allData[x].devansh.trips);
                allRevenue.push(allData[x].devansh.revenue);
              }
              setAllTripsTemp(allTrips);
              setAllRevenueTemp(allRevenue);
            } else if (temp === "jatin") {
              for (let x in allData) {
                allTrips.push(allData[x].jatin.trips);
                allRevenue.push(allData[x].jatin.revenue);
              }
              setAllTripsTemp(allTrips);
              setAllRevenueTemp(allRevenue);
            } else if (temp === "sachin") {
              for (let x in allData) {
                allTrips.push(allData[x].sachin.trips);
                allRevenue.push(allData[x].sachin.revenue);
              }
              setAllTripsTemp(allTrips);
              setAllRevenueTemp(allRevenue);
            } else if (temp === "malay") {
              for (let x in allData) {
                allTrips.push(allData[x].malay.trips);
                allRevenue.push(allData[x].malay.revenue);
              }
              setAllTripsTemp(allTrips);
              setAllRevenueTemp(allRevenue);
            } else if (temp === "vivek") {
              for (let x in allData) {
                allTrips.push(allData[x].vivek.trips);
                allRevenue.push(allData[x].vivek.revenue);
              }
              setAllTripsTemp(allTrips);
              setAllRevenueTemp(allRevenue);
            }
            for (let x in data) {
              if (data[x].name === temp) {
                console.log(temp);
                var temp1 = total(allTrips);
                var temp2 = total(allRevenue);
                document.getElementById("one").innerText = data[x].name;
                document.getElementById("two").innerText = temp1;
                document.getElementById("three").innerText = temp2;
              }
            }
          }}
        >
          Click Me
        </button>
      </div>

      <h1>
        Name: <span id="one"></span>
      </h1>
      <h1>
        Trips: <span id="two"></span>
      </h1>
      <h1>
        Revenue: <span id="three"></span>
      </h1>

      <div
        id="chart"
        style={{ display: "flex", flexDirection: "row", maxWidth: "100%" }}
      >
        <Chart
          allMonths={allMonths}
          allTrips={allTripsTemp}
          title={"Trips"}
          color={"red"}
        />
        <Chart
          allMonths={allMonths}
          allTrips={allRevenueTemp}
          title={"Revenue"}
          color={"green"}
        />
      </div>

      <Link to="/">Back</Link>
    </div>
  );
};

export default Dashboard;
