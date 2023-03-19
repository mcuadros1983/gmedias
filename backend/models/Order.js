const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        kgtotal: {
            type: Number,
            required: true,
        },
        deleted: {
            type: Boolean,
            required: true,
        },
        location: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "location",
        },
        groups: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "group",
            }
        ]
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model("Order", orderSchema);
