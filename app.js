const express = require('express');
const cors = require('cors')
const app = express();

//middleware
app.use(cors())
app.use(express.json());


// Default error handler 
const errorHandeler = (err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    res.status(500).json({
        error: err
    })
}

app.use(errorHandeler)


module.exports = app;