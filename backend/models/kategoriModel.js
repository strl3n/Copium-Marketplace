const mongoose = require('mongoose');

// MEMBUAT SCHEMA MODEL UNTUK TABEL kategori
const kategoriSchema = new mongoose.Schema(
    {
        nama_kategori: {
            type: String,
            required: true,
            trim: true
        }
    },
    {
        timestamps: true,
        collection: "kategori"
    }
);

module.exports = mongoose.model("Kategori", kategoriSchema);