const mongoose = require('mongoose');

// MEMBUAT SCHEMA MODEL UNTUK TABEL customer
const customerSchema = new mongoose.Schema(
    {
        nama_customer: {
            type: String,
            required: true,
            trim: true
        },
        email_customer: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            lowercase: true,
            match: [/^\S+@\S+\.\S+$/, "Email tidak valid"] // REGEX INI MAKSUDNYA : EMAIL HARUS MENGGUNAKAN @ + nama service + . + domain
        },
        telepon_customer: {
            type: String,
            required: true,
            trim: true,
            match: [/^\+?[0-9\s-]{10,13}$/, "Nomor telepon tidak valid"] // REGEX INI MAKSUDNYA : NOMOR TELEPON BISA DIINPUT MENGGUNAKAN + ATAU TIDAK (+62). MINIMAL INPUT 10 DIGIT DAN MAKSIMAL INPUT 13 DIGIT SESUAI STANDAR NOMOR TELEPON DI INDONESIA
        },
        alamat_customer: {
            type: String,
            required: true,
            trim: true
        }
    },
    {
        timestamps: true,
        collection: "customer"
    }
);

module.exports = mongoose.model("Customer", customerSchema);