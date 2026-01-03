const express = require('express');
const connectDB = require("./config/databaseConfiguration");
const app = express();
app.use(express.json());

// KONEKSI KE databaseConfiguration.js
connectDB();

// CEK ROUTES KE POSTMAN
app.get("/", (req, res) => {
    return res.status(201).send({ message: "Seluruh koneksi sukses!" });
});

// SETTING API BERJALAN DI PORT 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Koneksi API berjalan di port ${PORT}!`); 
});