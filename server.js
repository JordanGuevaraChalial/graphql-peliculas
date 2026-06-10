const Director = require('./models/Director');
const Pelicula = require('./models/Pelicula');
const Actor = require('./models/Actor');
const Elenco = require('./models/Elenco');

Director.hasMany(Pelicula);
Pelicula.belongsTo(Director);

Pelicula.belongsToMany(Actor, { through: Elenco });
Actor.belongsToMany(Pelicula, { through: Elenco });

const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const sequelize = require('./database/database');

const Director = require('./models/Director');
const Pelicula = require('./models/Pelicula');
const Actor = require('./models/Actor');
const Elenco = require('./models/Elenco');

Director.hasMany(Pelicula);
Pelicula.belongsTo(Director);

Pelicula.belongsToMany(Actor, { through: Elenco });
Actor.belongsToMany(Pelicula, { through: Elenco });

sequelize.sync({ force: true })
.then(() => {

    console.log('Base de datos creada');

})
.catch((error) => {

    console.log(error);

});
