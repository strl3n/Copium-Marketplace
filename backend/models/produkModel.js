const mongoose = require('mongoose');

// MEMBUAT SCHEMA MODEL UNTUK TABEL produk
const produkSchema = new mongoose.Schema(
    {
        nama_produk: {
            type: String,
            required: true,
            trim: true
        },
        deskripsi_produk: {
            type: String,
            trim: true
        },
        harga_produk: {
            type: Number,
            required: true,
            min: 0
        },
        stok_produk: {
            type: Number,
            required: true,
            default: 0,
            min: 0
        },
        kategori: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Kategori",
            required: true
        },
        gambar_produk: [
            {
                type: String,
                trim: true
            }
        ]
    },
    {
        timestamps: true,
        collection: "produk"
    }
);

module.exports = mongoose.model("Produk", produkSchema);