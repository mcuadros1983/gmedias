const mongoose = require("mongoose")
const { MONGODB_URI } = require("./config.js");

// try {
//     const db = mongoose.connect(MONGODB_URI, {
//         useUnifiedTopology: true,
//         useNewUrlParser: true
//     });
//     console.log(db);
// } catch (error) {
//     console.error(error);
// }
mongoose.set("strictQuery", false);
mongoose.connect(MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)
    .then(() => console.log('Connection to mongoDB successful'))
    .catch((error) => console.log("error in connection to mongoDB", error))

// mongoose.connection.on("connected", () => {
//     console.log("Mongoose is connected");
// });

// mongoose.connection.on("disconnected", () => {
//     console.log("Mongoose is disconnected");
// });