const { Router } = require("express");
const router = Router();
const locationRouter = router

const { getLocations, getLocationById, addLocation, updateLocation, deleteLocation } = require("../controllers/location.controllers.js");

// GET /location/
locationRouter.get("/location", getLocations)

// GET /location/:id
locationRouter.get("/location/:id", getLocationById)

// POST /location/
locationRouter.post("/location", addLocation)

// PUT /location/:id
locationRouter.put("/location/:id", updateLocation)

// DELETE /location/:id
locationRouter.delete("/location/:id", deleteLocation)

module.exports = locationRouter;