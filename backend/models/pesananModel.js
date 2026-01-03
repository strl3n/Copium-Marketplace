const mongoose = require('mongoose');

// MEMBUAT SCHEMA MODEL UNTUK TABEL produk
const pesananSchema = new mongoose.Schema(
    {
        nama_customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Customer",
            required: true
        },
        tanggal_pesanan: {
            type: Date,
            min: '1990-01-01', // Format tanggal adalah YYYY-MM-DD
            max: Date.now, // Mengambil tanggal hari ini
            default: Date.now, // Mengambil tanggal hari ini
            required: true
        },
        produk: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Produk",
                requried: true
            }
        ]
    },
    {
        timestamps: true,
        collection: "produk"
    }
);

module.exports = mongoose.model("Pesanan", pesananSchema);