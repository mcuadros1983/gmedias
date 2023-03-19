const { Router } = require("express");
const router = Router();
const orderRouter = router

const { getOrders, getOrderById, addOrder, updateOrder, deleteOrder } = require("../controllers/order.controllers.js");

// GET /order/
orderRouter.get("/order", getOrders)

// GET /order/:id
orderRouter.get("/order/:id", getOrderById)

// POST /order/
orderRouter.post("/order", addOrder)

// PUT /order/:id
orderRouter.put("/order/:id", updateOrder)

// DELETE /order/:id
orderRouter.delete("/order/:id", deleteOrder)

module.exports = orderRouter;