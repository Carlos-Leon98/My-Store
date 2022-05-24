const { UserSchema, User } = require("./users.model")

function setUpModels(sequelize) {
  User.init(UserSchema, User.config(sequelize))
}

module.exports = setUpModels;
