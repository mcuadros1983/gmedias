const Location = require("../models/Location.js")

const getLocations = async (req, res) => {
    const locations = await Location.find();
    return res.json(locations);
};

const getLocationById = async (req, res) => {
    const { id } = req.params;

    const Location = await Location.findById(id);
    res.status(200).json(Location);
};

const addLocation = async (req, res) => {
    console.log("text", req.body)
    const { name } = req.body;

    try {
        const newLocation = new Location({
            name
        });

        const locationsaved = await newLocation.save();

        res.status(201).json(locationsaved);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};

const updateLocation = async (req, res) => {
    const updateLocation = await Location.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
        }
    );
    res.status(204).json(updateLocation);
};

const deleteLocation = async (req, res) => {
    const { id } = req.params;

    await Location.findByIdAndDelete(id);

    // code 200 is ok too
    res.status(204).json();
};

module.exports = { getLocations, getLocationById, addLocation, updateLocation, deleteLocation }