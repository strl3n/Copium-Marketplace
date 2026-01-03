const mongoose = require('mongoose');

const keranjangSchema = new mongoose.Schema(
    {
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Customer",
            required: true,
            unique: true
        },
        item: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Produk",
                required: true
            }
        ]
    },
    {
        timestamps: true,
        collection: "cart"
    }
);

module.exports = mongoose.model("Keranjang", keranjangSchema);