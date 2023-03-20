import React, { useState, useEffect } from "react";

const TripsList = ({ data }) => {
  const [listData, setListData] = useState([]);
  var srno = 0;
  useEffect(() => {
    setListData(data);
  }, [data]);

  return (
    <div
      style={{
        width: "80%",
        display: "flex",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "2%",
      }}
    >
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Sr. No.</th>
            <th scope="col">Trip Id</th>
            <th scope="col">Driver Name</th>
            <th scope="col">Driver Id</th>
            <th scope="col">Date</th>
            <th scope="col">Start Time</th>
            <th scope="col">End Time</th>
            <th scope="col">Start Location</th>
            <th scope="col">End Location</th>
            <th scope="col">Revenue</th>
            <th scope="col">City</th>
            <th scope="col">State</th>
          </tr>
        </thead>
        <tbody>
          {listData.forEach((driver) => {
            const d = driver.trips;

            d.map((trip) => {
              srno += 1;
              return (
                <tr key={srno}>
                  <td>{srno}</td>
                  <td>{trip.tid}</td>
                  <td>{driver.fname + " " + driver.lname}</td>
                  <td>{driver.did}</td>
                  <td>{String(trip.stime).slice(0, 10)}</td>
                  <td>{String(trip.stime).slice(11, 19)}</td>
                  <td>{String(trip.etime).slice(11, 19)}</td>
                  <td>{trip.sloc[0] + "° N, " + trip.sloc[1] + "° E"}</td>
                  <td>{trip.eloc[0] + "° N, " + trip.eloc[1] + "° E"}</td>
                  <td>{"Rs. " + trip.revenue}</td>
                  <td>{trip.city["name"]}</td>
                  <td>{trip.city["state"]}</td>
                </tr>
              );
            });
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TripsList;
