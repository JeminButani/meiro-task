const mongoose = require('mongoose');

mongoose.set("strictQuery",false)

mongoose.connect('mongodb+srv://sohan:sohan@cluster0.kgsggc7.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "Driver"
})
.then(() => {
    console.log("Connection Sucessfull");
})
.catch((e) => {
    console.log(e);
})