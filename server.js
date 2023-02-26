const app = require("./app")
const colors = require("colors");
const db = require("./db/db");
require("dotenv").config()
const PORT = process.env.PORT || 4000

//database connection
db().then((res) => {
    if (res) {
        console.log('Database connection successfull.'.bgMagenta);
        app.listen(PORT, () => {
            console.log(`evnto is running at port ${PORT}`.bgCyan);
        })
    }
}).catch((err) => {
    console.log('Failed to connect database.  Err:'.bgRed, err.message);
})
