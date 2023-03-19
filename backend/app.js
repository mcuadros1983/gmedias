const express = require("express")
const exphbs = require("express-handlebars");
const { join } = require("path");
const path = require("path");
const indexRouter = require("./routes/index.routes.js")
const groupRouter = require("./routes/group.routes.js")
const locationRouter = require("./routes/location.routes.js")
const mediaRouter = require("./routes/media.routes.js")
const orderRouter = require("./routes/order.routes.js")

// Initializations
const app = express()

// settings
app.set("port", process.env.PORT || 4000);
app.set("views", join(path.join(__dirname, "views")));

// config view engine
const hbs = exphbs.create({
    defaultLayout: "main",
    layoutsDir: join(app.get("views"), "layouts"),
    partialsDir: join(app.get("views"), "partials"),
    extname: ".hbs",
});
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");

// middlewares
//app.use(morgan("dev"));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Global Variables

// routes
app.use("/", indexRouter);
app.use("/group", groupRouter);
app.use("/location", locationRouter);
app.use("/media", mediaRouter);
app.use("/order", orderRouter);

// static files
app.use(express.static(join(__dirname, "public")));

module.exports = app