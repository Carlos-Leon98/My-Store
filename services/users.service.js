const { use } = require("express/lib/router");
const faker = require("faker");

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
  find() {
    return this.users;
  }
  findOne(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.users.find(user => user.id === id))
      }, 5000);
    })
  }
  async create(data) {
    const user = {
      id: faker.datatype.uuid(),
      ...data
    };
    this.users.push(user);
    return user;
  }
  async update(id, data) {
    const index = this.users.findIndex(user => user.id === id);
    if (index === -1) {
      throw new Error("User Not Found");
    }
    const user = this.users[index];
    this.users[index] = {
      ...user,
      ...data
    }
    return this.users[index];
  }
  async delete(id) {
    const index = this.users.findIndex(user => user.id === id);
    if (index === -1) {
      throw new Error("User Not Found");
    }
    this.users.splice(index, 1);
    return { id };
  }
}

module.exports = UsersServices;
