const mongoose = require("mongoose")

const driverDetails = new mongoose.Schema({
    name: String,
    trips: Number,
    revenue: Number
},
    {
        collection:"driverdetails"
    }

)

mongoose.model("driverdetails", driverDetails)