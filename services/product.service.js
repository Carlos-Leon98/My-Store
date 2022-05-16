const faker = require("faker");

class ProductsServices {

  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        img: faker.image.imageUrl()
      });
    }
  }

  create()

  find() {
    return this.products;
  }

  findOne()

  update()

  delete()
}

module.exports = ProductsServices;
