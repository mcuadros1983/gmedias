const Order = require("../models/Order.js")
const Location = require("../models/Location.js")
const Group = require("../models/Group.js")

const getOrders = async (req, res) => {
    const orders = await Order.find();
    return res.json(orders);
};

const getOrderById = async (req, res) => {
    const { id } = req.params;

    const order = await Order.findById(id);
    res.status(200).json(order);
};

const addOrder = async (req, res) => {
    console.log("text", req.body)

    const { kgtotal, location, groupsid } = req.body
    //const locationsFound = await Location.find({ name: { $in: location } });
    //const locationFound = await Location.findOne({ name: { $in: location } });
    const groupsFound = await Group.find({ _id: { $in: groupsid } });

    try {
        const newOrder = new Order({
            kgtotal,
            deleted: false,
            location: await Location.findOne({ name: { $in: location } }),
            groups: groupsFound.map((group) => group._id),     
        });

        const ordersaved = await newOrder.save();

        res.status(201).json(ordersaved);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};

const updateOrder = async (req, res) => {
    const updateOrder = await Order.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
        }
    );
    res.status(204).json(updateOrder);
};

const deleteOrder = async (req, res) => {
    const { id } = req.params;

    await Order.findByIdAndDelete(id);

    // code 200 is ok too
    res.status(204).json();
};

module.exports = { getOrders, getOrderById, addOrder, updateOrder, deleteOrder }