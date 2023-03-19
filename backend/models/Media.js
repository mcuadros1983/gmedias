const mongoose = require("mongoose");

const mediaSchema = new mongoose.Schema(
    {
        barcode: {
            type: String,
            required: true,
        },
        mediacode: {
            type: Number,
            required: true,
        },
        kg: {
            type: Number,
            required: true,
        },
        troop: {
            type: Number,
            required: true,
        },
        deleted: {
            type: Boolean,
            required: true,
        },
        instock: {
            type: Boolean,
            required: true,
        },
        idgroup: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "group",
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Media = mongoose.model("Media", mediaSchema);
module.exports = Media
