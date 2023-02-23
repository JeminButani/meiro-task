const mongoose = require("mongoose");

const allyearDetails = new mongoose.Schema(
  {
    name: String,
    sohan: {
      trips: Number,
      revenue: Number,
    },
    ruchit: {
      trips: Number,
      revenue: Number,
    },
    jemin: {
      trips: Number,
      revenue: Number,
    },
    yash: {
      trips: Number,
      revenue: Number,
    },
    jugal: {
      trips: Number,
      revenue: Number,
    },
    devansh: {
      trips: Number,
      revenue: Number,
    },
    jatin: {
      trips: Number,
      revenue: Number,
    },
    sachin: {
      trips: Number,
      revenue: Number,
    },
    malay: {
      trips: Number,
      revenue: Number,
    },
    vivek: {
      trips: Number,
      revenue: Number,
    },
  },
  {
    collection: "allyeardetails",
  }
);

mongoose.model("allyeardetails", allyearDetails);
