const Group = require("../models/Group.js")
const Media = require("../models/Media.js")

const getGroups = async (req, res) => {
    const groups = await Group.find();
    return res.json(groups);
};

const getGroupById = async (req, res) => {
    const { id } = req.params;

    const Group = await Group.findById(id);
    res.status(200).json(Group);
};

const addGroup = async (req, res) => {
    console.log("text", req.body)
    //const idmedia = req.params.idmedia
    const { name, kg, medianumber } = req.body
    const mediasFound = await Media.find({ _id: { $in: medianumber } });
    const idmedia = mediasFound.map((media) => media._id)
    try {
        const newGroup = new Group({
            name,
            kg,
            medianumber,
            deleted: false,
            instock: true,
            idmedia
        });

        const groupsaved = await newGroup.save();
        res.status(201).json(groupsaved);
        await Media.updateOne({_id:idmedia},{$set:{instock:false}})    
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};

const updateGroup = async (req, res) => {
    const updateGroup = await Group.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
        }
    );
    res.status(204).json(updateGroup);
};

const deleteGroup = async (req, res) => {
    const { id } = req.params;

    await Group.findByIdAndDelete(id);

    // code 200 is ok too
    res.status(204).json();
};

module.exports = { getGroups, getGroupById, addGroup, updateGroup, deleteGroup }