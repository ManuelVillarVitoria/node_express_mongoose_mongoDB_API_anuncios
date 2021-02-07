"use strict";

const mongoose = require("mongoose");
const TAGS_LIST = ["work", "lifestyle", "motor", "mobile"];


const anuncioSchema = mongoose.Schema({
    nombre: String,
    venta: Boolean,
    precio: Number,
    foto: {
        type: String
    },
    tags: [{type: String, enum: TAGS_LIST}]
});

anuncioSchema.index({ venta: 1});
anuncioSchema.index({ precio: 1});
anuncioSchema.index({ tags: 1 });

anuncioSchema.statics.list = () => {
    
};

const Anuncio = mongoose.model("Anuncio", anuncioSchema);


module.exports = Anuncio;