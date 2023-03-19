const { Router } = require("express");
const router = Router();
const indexRouter = router
const { renderIndex } = require("../controllers/index.controllers.js");

indexRouter.get("/", renderIndex);
// router.get("/about", renderAbout);

module.exports = indexRouter
