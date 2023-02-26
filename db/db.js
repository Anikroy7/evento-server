const mongoose = require("mongoose");

const db = async () => {
    return await mongoose.connect('mongodb://127.0.0.1:27017/enento')

}

module.exports = db
