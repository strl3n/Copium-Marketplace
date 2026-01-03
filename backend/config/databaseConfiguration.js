const mongoose = require('mongoose');

const connectDB = async() => {
    try {
     await mongoose.connect("mongodb://localhost:27017/copium");

     console.log("Tersambung ke database MongoDB: copium!");
     
    }
    catch (error) {
        console.error("Gagal tersambung ke database MongoDB: ", error.message);
        
    }
};

module.exports = connectDB;