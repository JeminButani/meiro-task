const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
require("./db/conn");
require("./model/mySchema");
require("./model/myCity");
require("./model/allMonths");

const app = express();

const driver = mongoose.model("driverdetails");
const city = mongoose.model("citydetails");
const allmonth = mongoose.model("allyeardetails");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const port = 5000;

app.get("/totalDrivers", async (req, res) => {
  try {
    const allDrivers = await driver.find({});
    res.send({ status: "ok", data: allDrivers });
  } catch (e) {
    console.log(e);
  }
});

app.get("/totalCity", async (req, res) => {
  try {
    const allCity = await city.find({});
    res.send({ status: "ok", data: allCity });
  } catch (e) {
    console.log(e);
  }
});

app.get("/allMonths", async (req, res) => {
  try {
    const allmonths = await allmonth.find({});
    res.send({ status: "ok", data: allmonths });
  } catch (e) {
    console.log(e);
  }
});

app.listen(port, () => {
  console.log(`serve Is Live at http://127.0.0.1:${port}`);
});
