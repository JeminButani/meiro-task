import React, { useState, useEffect } from "react";
const DriverList = ({ data }) => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    setDrivers(data);
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
  var srno = 0;

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
            <th scope="col">Driver Id</th>
            <th scope="col">Name</th>
            {/* <th scope="col">FirstName</th>
            <th scope="col">LastName</th> */}
            <th scope="col">Licence No.</th>
            <th scope="col">BirthDate</th>
            <th scope="col">Work Status</th>
            <th scope="col">Total Trips</th>
            <th scope="col">Total Revenue</th>
          </tr>
        </thead>
        <tbody>
          {drivers.map((driver) => {
            srno += 1;
            return (
              <tr key={driver._id}>
                <td>{srno}</td>
                <td>{driver.did}</td>
                <td>{driver.fname + " " + driver.lname}</td>
                {/* <td>{driver.fname}</td>
                <td>{driver.lname}</td> */}
                <td>{driver.dlno}</td>
                <td>{String(driver.bdate).slice(0, 10)}</td>
                <td>{driver.working ? "Working" : "Not Working"}</td>
                <td>{TotalTrips(driver.trips)}</td>
                <td>{"Rs. " + TotalRevenue(driver.trips)}</td>
              </tr>
            );
          })}
          {/* <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default DriverList;
