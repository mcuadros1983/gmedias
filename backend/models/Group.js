const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        kg: {
            type: Number,
            required: true,
        },
        medianumber:{
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
        idmedia:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"media"
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model("Group", groupSchema);

