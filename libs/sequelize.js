const { Sequelize } = require("sequilize");

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgress://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequilize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: true
});

module.exports = sequilize;
