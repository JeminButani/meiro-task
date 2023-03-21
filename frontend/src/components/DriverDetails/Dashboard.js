import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import "./driverDetails.scss";

const Dashboard = ({ data }) => {
  const navigate = useNavigate();
  const [allData, setAllData] = useState([]);
  const [updateData, setUpdateData] = useState(null);
  const [allRevenueTemp, setAllRevenueTemp] = useState([]);
  const [time, setTime] = useState([]);
  // const [dname, setDname] = useState("");
  // const [bdate, setBdate] = useState("");
  // const [dlno, setDlno] = useState("");
  const [drdata, setDrdata] = useState({});

  var xaxis = [];
  var yaxisRevenue = [];

  useEffect(() => {
    setAllData(data);
  }, [data]);

  const TotalTrips = (trips) => {
    var total = 0;
    trips.forEach((element) => {
      total += 1;
    });
    return total;
  };

  const TotalRevenue = (trips) => {
    var total = 0;
    trips.forEach((element) => {
      total = total + Number(element.revenue);
    });
    return total;
  };

  const handleClick = () => {
    if (updateData === null) {
      alert(
        "Please Enter the Driver name and the id and Submit , Then try update!"
      );
    } else {
      navigate("/driverUpdate", { state: updateData });
      console.log("update");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const id = Number(e.target.id.value);

    allData.forEach((data) => {
      if (data.fname === name && data.did === id) {
        // setDname(data.fname + " " + data.lname);
        // setDlno(data.dlno);
        // setBdate(String(data.bdate).slice(0, 10));

        var obj = {};
        obj.id = data._id;
        obj.tripsArr = data.trips;
        obj.fname = data.fname;
        obj.lname = data.lname;
        obj.dlno = data.dlno;
        obj.bdate = String(data.bdate).slice(0, 10);
        obj.did = data.did;
        obj.work = data.working ? "Working" : "Not Working";
        obj.trips = TotalTrips(data.trips);
        obj.revenue = "Rs. " + TotalRevenue(data.trips);

        setDrdata(obj);
        setUpdateData(obj);

        const temp = data.trips;
        temp.forEach((trip) => {
          xaxis.push(String(trip.stime).slice(0, 10));
          yaxisRevenue.push(trip.revenue);
        });
        setTime(xaxis);
        setAllRevenueTemp(yaxisRevenue);
      }
    });
  };
  console.log(updateData);

  return (
    <>
      <div className="upper">
        <form className="myform" onSubmit={handleSubmit}>
          <div className="form-groupspace">
            <label style={{ fontWeight: "bolder", marginBottom: "1%" }}>
              Driver Name :
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="name"
              placeholder="Enter driver name here"
            />
          </div>
          <div className="form-group space">
            <label style={{ fontWeight: "bolder", marginBottom: "1%" }}>
              Driver Id :
            </label>
            <input
              type="text"
              name="id"
              className="form-control"
              id="id"
              placeholder="Enter Driver Id"
            />
          </div>

          <button type="submit" className="btn btn-primary space">
            Submit
          </button>
        </form>

        <div className="details">
          <h1 style={{ fontWeight: "bolder" }}>Driver Info:</h1>

          <div className="moreDetail">
            <div className="left">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td className="bold">First Name</td>
                    <td>{drdata.fname}</td>
                  </tr>
                  <tr>
                    <td className="bold">Last Name</td>
                    <td>{drdata.lname}</td>
                  </tr>
                  <tr>
                    <td className="bold">Driver Id</td>
                    <td>{drdata.did}</td>
                  </tr>
                  <tr>
                    <td className="bold">Licence No.</td>
                    <td>{drdata.dlno}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="right">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td className="bold">Birth Date</td>
                    <td>{drdata.bdate}</td>
                  </tr>
                  <tr>
                    <td className="bold">Work Status</td>
                    <td>{drdata.work}</td>
                  </tr>
                  <tr>
                    <td className="bold">Total Trips</td>
                    <td>{drdata.trips}</td>
                  </tr>
                  <tr>
                    <td className="bold">Total Revenue</td>
                    <td>{drdata.revenue}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <button
              type="button"
              className="btn btn-primary space updateBtn"
              onClick={handleClick}
            >
              Update
            </button>
          </div>
        </div>
      </div>

      <div className="mainWrapper">
        <center>
          <h1>Total Revenue per Date</h1>
        </center>
        <div className="chartWrapper">
          <div className="chartAreaWrapper">
            <Line
              className="chart"
              width="12000"
              height="400"
              title=" Chart"
              // options={{
              //   scales: {
              //     x: {
              //       type: 'logarithmic',
              //       bounds: 'ticks'
              //     },
              //   },
              // }}
              data={{
                labels: time,
                datasets: [
                  {
                    label: "Revenue",
                    indexAxis: "x",
                    data: allRevenueTemp,
                    backgroundColor: [
                      "red",
                      "green",
                      "blue",
                      "yellow",
                      "black",
                      "cyan",
                    ],
                    pointHoverBorderWidth: 10,
                    p0: 0,
                    p1: 0,
                  },
                ],
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
