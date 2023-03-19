// const { Router } = require("express");
// const router = Router();
const { Router } = require("express");
const router = Router();
const mediaRouter = router
const { test, mediasSaved, renderMedias, renderMediaForm, getMedias, getMediaById, updateMedia, deleteMedia } = require("../controllers/media.controllers.js");

// GET /media/add
mediaRouter.get("/add", renderMediaForm)

// GET /media/all

mediaRouter.get("/nuevo", test)


mediaRouter.get("/", renderMedias)

// POST /media/media-new
mediaRouter.post("/media-new", mediasSaved)

// GET /media/:id
mediaRouter.get("/:id", getMediaById)

// POST /media/
//mediaRouter.post("/media", addMedia)

// PUT /media/:id
mediaRouter.put("/:id", updateMedia)

// DELETE /media/:id
mediaRouter.delete("/:id", deleteMedia)

module.exports = mediaRouter;