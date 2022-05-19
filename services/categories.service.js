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
        CategoryName: faker.commerce.department(),
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
  async create(data) {
    const category = {
      id: faker.datatype.uuid(),
      ...data
    };
    this.categories.push(category);
    return category;
  }
  async delete(id) {
    const index = this.categories.findIndex(category => category.id === id);
    if (index === -1) {
      throw new Error("Category not Found");
    }
    this.categories.splice(index, 1);
    return { id };
  }
  async update(id, data) {
    const index = this.categories.findIndex(category => category.id === id);
    if (index === -1) {
      throw new Error("Category not Found");
    }
    const category = this.categories[index];
    this.categories[index] = {
      ...category,
      ...data
    };
    return this.categories[index];
  }
}

module.exports = CategoriesServices;
