const { Sequelize } = require("sequilize");

const { config } = require("../config/config");
const setUpModels = require("../db/models")

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgress://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequilize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: true
});

setUpModels(sequilize);

sequilize.sync();

module.exports = sequilize;
