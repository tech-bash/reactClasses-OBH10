const mongoose = require("mongoose");

const connectDb = async () => {
    try {
       await mongoose.connect(process.env.MONGO_URL);

        console.log("MongoDb connection is successful");

    } catch (e) {
        console.log("Cannot connect with MongoDb server");
        //process.exit(1);

    }
}
module.exports = connectDb;