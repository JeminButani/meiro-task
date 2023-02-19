import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/totalDrivers", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((i) => {
        setData(i.data);
      });
  }, []);

  return (
    <div>
      <div>
        <label htmlFor="Driver">Choose a Driver: </label>

        <select name="Driver" id="Driver">
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
          onClick={() => {
            var temp = document.getElementById("Driver").value;
            console.log(temp);
            for (let x in data) {
              // console.log(data[x]);
              if (data[x].name === temp) {
                console.log(temp);
                document.getElementById("one").innerText = data[x].name;
                document.getElementById("two").innerText = data[x].trips;
                document.getElementById("three").innerText = data[x].revenue;
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
      <Link to="/">Back</Link>
    </div>
  );
};

export default Dashboard;
