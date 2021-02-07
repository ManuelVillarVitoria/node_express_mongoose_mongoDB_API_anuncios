"use strict";

let Anuncio = require("../models/Anuncio");


const lista = ({filter, skip, limit, fields, sort}) => {
    const query = Anuncio.find(filter);                        
    query.skip(skip);
    query.limit(limit);
    query.select(fields);
    query.sort(sort);
    return query.exec();      
}

const tagList = () => {
    const query = Anuncio.find().distinct("tags");
    return query.exec();
}

const unAnuncio = id => {
    const query = Anuncio.findById(id);
    console.log(query.exec());
    return query.exec();
}

module.exports.listaAnuncios = lista;
module.exports.listaTags = tagList;
module.exports.consultarUnAnuncio = unAnuncio;