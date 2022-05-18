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
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        img: faker.image.imageUrl()
      });
    }
  }

  create(data) {
    const { name, price, img } = data;
    const product = {
      id: faker.datatype.uuid(),
      name,
      price,
      img
    };
    this.products.push(product);
    return product
  }

  find() {
    return this.products;
  }

  findOne(id) {
    return this.products.find(item => item.id === id);
  }

  update(){}

  delete(id){}
}

module.exports = ProductsServices;
