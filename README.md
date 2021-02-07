# NodePop


## Introduction 
- API Nodepop, con servicio que mantiene anuncios de compra o venta de artículos y permite consultar, y buscar filtros por varios criterios.
- Además puedes visitar un site con los anuncios en la base de datos de nodepop después de iniciar la app ingresando al url [http://localhost:3000/](http://localhost:3000/).

## Stack Tecnológico

- EXPRESS, MongoDB, mongoose y Node.js.


### Arranque de la API
- Para este proyecto es necesario tener instalado MongoDB. Primero vamos a arrancar un servidor MongoDB local escribiendo la siguiente lìnea en un terminal:

```shell
> ./bin/mongod --dbpath ./data/db --directoryperdb
```

-Instalación de dependencias:

```shell
> npm install
```

-Inicializar la Base de Datos
```shell
> npm run db
```

- En modo desarrollo, ejecutamos en un terminal:
```shell
> npm run dev
```
- En modo Produción, ejecutamos:
```shell
> npm run prod
```

## Ducomentación de la API en Postman

[Documentación](https://documenter.getpostman.com/view/3162339/SVn3sFCr#f7bea860-7aef-498b-b0e8-2803b1ad2fc8).

