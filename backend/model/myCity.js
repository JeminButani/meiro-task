const mongoose = require("mongoose")

const cityDetails = new mongoose.Schema({
    name: String,
    trips: Number,
    revenue: Number
},
    {
        collection:"citydetails"
    }

)

mongoose.model("citydetails", cityDetails)