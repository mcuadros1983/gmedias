require("./database.js");
const app = require("./app.js");
const { PORT } =require("./config.js");

app.listen(PORT);
console.log("Server on port", app.get("port"));