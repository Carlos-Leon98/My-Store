const boom = require("@hapi/boom");
const { use } = require("express/lib/router");
const faker = require("faker");

const { models } = require("../libs/sequelize");

class UsersServices {
  constructor() {
    this.users = [];
    this.generate();
  }
  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.users.push({
        id: faker.datatype.uuid(),
        name: faker.name.findName(),
        city: faker.address.city(),
        zipCode: faker.address.zipCode("#####"),
        state: faker.address.stateAbbr(),
      })
    };
  }
  async find() {
    const response = await models.User.findAll();
    return response;
  }
  findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound("User not Found");
    }
    return user;
  }
  async create(data) {
    const newUser = await models.User.create(data);
    return newUser;
  }
  async update(id, data) {
    const user = await this.findOne(id);
    const response = await user.update(data);
    return response;
  }
  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return { id };
  }
}

module.exports = UsersServices;
