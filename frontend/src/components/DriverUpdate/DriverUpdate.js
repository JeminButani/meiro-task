import React from "react";
import "./driverUpdate.scss";
import { useNavigate, useLocation } from "react-router-dom";

const DriverUpdate = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { fname, lname, did, dlno, bdate, id, tripsArr } = location.state;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fname = String(e.target.fname.value);
    const lname = String(e.target.lname.value);
    const dlno = String(e.target.licenceNo.value);
    const bdate = new Date(e.target.bdate.value);
    const did = Number(e.target.driverId.value);
    const work = Boolean(e.target.working.value);

    await fetch("http://127.0.0.1:5000/updateDriverDetail", {
      method: "POST",
      body: JSON.stringify({
        id: String(id),
        fname: fname,
        lname: lname,
        dlno: dlno,
        bdate: bdate,
        did: did,
        working: work,
        trips: tripsArr,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  console.log(id, tripsArr);

  return (
    <div
      style={{
        width: "60%",
        display: "flex",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "2%",
        border: "5px solid gray",
        borderRadius: "15px",
      }}
    >
      <form
        style={{
          width: "80%",
          display: "flex",
          flexDirection: "column",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "2%",
        }}
        onSubmit={handleSubmit}
      >
        <h1>Update driver Details:</h1>
        <div className="form-group gap">
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            id="FirstName"
            placeholder="First Name"
            defaultValue={fname}
            name="fname"
          />
        </div>
        <div className="form-group gap">
          <label>Last Name</label>
          <input
            type="text"
            className="form-control"
            id="LastName"
            placeholder="Last Name"
            defaultValue={lname}
            name="lname"
          />
        </div>
        <div className="form-group gap">
          <label>Birth Date</label>
          <input
            type="text"
            className="form-control"
            id="Bdate"
            placeholder="BirthDate"
            defaultValue={bdate}
            name="bdate"
          />
        </div>
        <div className="form-group gap">
          <label>Driver Id</label>
          <input
            type="text"
            className="form-control"
            id="DriverId"
            placeholder="Driver Id"
            defaultValue={did}
            name="driverId"
          />
        </div>
        <div className="form-group gap">
          <label>Licence No.</label>
          <input
            type="text"
            className="form-control"
            id="LicenceNo"
            placeholder="Licence No."
            defaultValue={dlno}
            name="licenceNo"
          />
        </div>
        <div className="form-group gap">
          <label>Work Status</label>
          <div className="input-group mb-3">
            <div className="input-group-prepend op">
              <p className="input-group-text" htmlFor="inputGroupSelect01">
                Options
              </p>
            </div>
            <select
              className="custom-select"
              id="inputGroupSelect01"
              name="working"
            >
              <option defaultValue={true}>Working</option>

              <option value={false}>Not Working</option>
            </select>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn">
          Update
        </button>
      </form>
    </div>
  );
};

export default DriverUpdate;
