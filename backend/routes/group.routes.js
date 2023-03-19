const { Router } = require("express");
const router = Router();
const groupRouter = router

const { getGroups, getGroupById, addGroup, updateGroup, deleteGroup } = require("../controllers/group.controllers.js");

// GET /group/
groupRouter.get("/group", getGroups)

// GET /group/:id
groupRouter.get("/group/:id", getGroupById)

// POST /group/
groupRouter.post("/group", addGroup)

// PUT /group/:id
groupRouter.put("/group/:id", updateGroup)

// DELETE /group/:id
groupRouter.delete("/group/:id", deleteGroup)

module.exports = groupRouter;