//require('dotenv').config()

const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI || `mongodb://localhost:27017/gmediadb`

module.exports = {PORT, MONGODB_URI}