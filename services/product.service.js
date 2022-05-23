const faker = require("faker");
const boonm = require("@hapi/boom");

const pool = require("../libs/postgres.pool");

class ProductsServices {

  constructor() {
    this.products = [];
    this.generate();
    this.pool = pool;
    this.pool.on("error", (error) => console.error(error));
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        img: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean()
      });
    }
  }

  async create(data) {
    const product = {
      id: faker.datatype.uuid(),
      ...data
    };
    this.products.push(product);
    return product
  }

  async find() {
    const query = "SELECT * FROM tasks";
    const response = await this.pool.query(query);
    return response.rows;
  }

  async findOne(id) {
    const product = this.products.find(item => item.id === id);
    if (!product) {
      throw boonm.notFound("Product Not Found");
    }
    if (product.isBlock) {
      throw boonm.conflict("This product is blocked");
    }
    return product;
  }

  async update(id, changes) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boonm.notFound("Product Not Found");
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes
    }
    return this.products[index]
  }

  async delete(id) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boonm.notFound("Product Not Found");
    }
    this.products.splice(index, 1);
    return { id }
  }
}

module.exports = ProductsServices;
