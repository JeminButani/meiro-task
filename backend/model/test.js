const mongoose = require("mongoose");

const driverDetails = new mongoose.Schema(
  {
    did: Number,
    fname: String,
    lname: String,
    bdate: Date,
    dlno: String,
    working: Boolean,
    trips: [
      {
        tid: Number,
        stime: Date,
        etime: Date,
        sloc: [],
        eloc: [],
        revenue: Number,
        city: {
          id: String,
          name: String,
          state: String,
        },
      },
    ],
  },
  {
    collection: "test",
  }
);

mongoose.model("test", driverDetails);
