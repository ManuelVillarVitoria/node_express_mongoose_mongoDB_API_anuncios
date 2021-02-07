"use strict";

require('dotenv').config();

const mongoose = require("mongoose");
const conn = mongoose.connection;

mongoose.set('useFindAndModify', false);

conn.on("error", err => {
    console.log("Error de conexiòn", err);
    process.exit(1);
});

conn.on("open", () =>  {
    console.log("Conectado a MongoDB en", conn.name);
});


mongoose.connect(process.env.MONGODB_CONNECTION, { 
 useNewUrlParser: true, 
 useUnifiedTopology: true,
 useCreateIndex: true 
});


module.exports = conn;