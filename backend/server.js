const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
require("./db/conn");
require("./model/mySchema");
require("./model/myCity");
require("./model/allMonths");
require("./model/driverDetails");
require("./model/test");

const app = express();

const driver = mongoose.model("driverdetails");
const city = mongoose.model("citydetails");
const allmonth = mongoose.model("allyeardetails");
const newDriver = mongoose.model("newdriverdetails");
const test = mongoose.model("test");

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

app.get("/newDrivers", async (req, res) => {
  try {
    const data = await newDriver.findOne();
    const temp = data.trips;
    const t = [];
    var a = 0;
    temp.forEach((element) => {
      if (element.stime >= new Date("2022-11-01")) {
        a = a + Number(element.revenue);
      }
    });
    t.push(a);
    res.send({ status: "ok", data: t });
  } catch (error) {
    alert(error.message);
  }
});

// Calculate the total revenue for each city
async function calTotalRevenue(city) {
  const data = await test.find({});
  var total = 0;
  const ans = [];
  data.forEach((e) => {
    const temp = e.trips;
    temp.forEach((element) => {
      if (element.city["name"] == city) {
        total = total + Number(element.revenue);
        ans.push(element);
      }
    });
  });
  return ans;
}

// get total revenue of each driver
async function getTotalRevenue() {
  const data = await test.find({});
  const ans = [];
  data.forEach((e) => {
    const temp = e.trips;
    var total = 0;
    temp.forEach((element) => {
      total = total + Number(element.revenue);
    });
    ans.push(total);
  });
  return ans;
}

// get total no. of trips of each driver
async function getTotalTrips() {
  const data = await test.find({});
  const ans = [];
  data.forEach((e) => {
    const temp = e.trips;
    var total = 0;
    temp.forEach((element) => {
      total += 1;
    });
    ans.push(total);
  });
  return ans;
}

// get all the names of the drivers
async function getDriverNames() {
  const data = await test.find({});
  const ans = [];
  data.forEach((e) => {
    ans.push(e.fname);
  });
  return ans;
}

app.post("/calTotRev", async (req, res) => {
  try {
    const t = await calTotalRevenue(req.body.city);
    res.send({ status: "ok", data: t });
  } catch (error) {
    alert(error.message);
  }
});

app.get("/getTotRev", async (req, res) => {
  try {
    const t = await getTotalRevenue();
    res.send({ status: "ok", data: t });
  } catch (error) {
    alert(error.message);
  }
});

app.get("/getTotTrips", async (req, res) => {
  try {
    const t = await getTotalTrips();
    res.send({ status: "ok", data: t });
  } catch (error) {
    alert(error.message);
  }
});

app.get("/getNames", async (req, res) => {
  try {
    const t = await getDriverNames();
    res.send({ status: "ok", data: t });
  } catch (error) {
    res.send({ status: "error" });
    alert(error.message);
  }
});

// function to call all data
async function allData() {
  const data = await newDriver.find({});
  return data;
}

app.get("/test", async (req, res) => {
  try {
    const t = await allData();
    res.send({ status: "ok", data: t });
  } catch (error) {
    alert(error.message);
  }
});

app.listen(port, () => {
  console.log(`serve Is Live at http://127.0.0.1:${port}`);
});
