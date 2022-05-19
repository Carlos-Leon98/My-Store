const faker = require("faker");

class CategoriesServices {

  constructor() {
    this.categories = [];
    this.generate();
  }

  generate() {
    const limit = 10;
    for (let index = 0; index < limit; index++) {
      this.categories.push({
        id: faker.datatype.uuid(),
        Category: faker.commerce.department(),
        CategoryDescription: faker.commerce.productDescription()
      });
    }
  }
  find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.categories);
      }, 3000);
    })
  }
  async findOne(id) {
    return this.categories.find(category => category.id === id);
  }
}

module.exports = CategoriesServices;
