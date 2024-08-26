const mongoose = require('mongoose');
require('dotenv').config();

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.DBCONNECT); // No need for deprecated options
        console.log("Database Connected");
    } catch (error) {
        console.log("ERROR in connecting!", error);
    }
};

module.exports = connectToDB;


module.exports = connectToDB;
