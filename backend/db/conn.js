const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

// mongodb://127.0.0.1:27017/
//mongodb+srv://sohan:sohan@cluster0.kgsggc7.mongodb.net/?retryWrites=true&w=majority

mongoose
  .connect("mongodb+srv://sohan:sohan@cluster0.kgsggc7.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // dbName: "Driver",
    dbName: "sohan",
  })
  .then(() => {
    console.log("Connection Sucessfull");
  })
  .catch((e) => {
    console.log(e);
  });
