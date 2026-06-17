const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './peliculas.db',
  logging: false,
  dialectModule: require('sqlite3-offline-next') 
});

module.exports = sequelize;