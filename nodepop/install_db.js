'use strict';

require('dotenv').config();

const fs = require('fs');

const conn = require('./lib/connectDB');
const Anuncio = require('./models/Anuncio');

const file = './data/anuncios.json';
const data = JSON.parse(fs.readFileSync(file,'utf-8'));


conn.once('open', async () => {
        console.log('Limpiando Base de datos..!');
        await deleteAgentes();
        console.log('Cargando anuncios.json!');
        await loadAnuncios();
        console.log('Terminado..!');
        conn.close();
});


const deleteAgentes = async () => {
    try {
        const resDel = await Anuncio.deleteMany({});
        console.log('Base de datos borrada!', resDel.ok, resDel.deletedCount);        
    } catch (err) {
        console.log('Error al limpiar Anuncios', err);    
    }
};

const loadAnuncios = async () => {    
    try {
      await Anuncio.insertMany(data.anuncios);
      console.log('Datos de anuncios cargados.!');        
    } catch (err) {
        console.log(`Error al cargar archivo ${file}, >>>>  ${err}`);
        process.exit();
    }
};


