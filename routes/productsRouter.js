const express = require("express");
const res = require("express/lib/response");

const ProductsServices = require("../services/product.service");
const validatorHandler = require("../middlewares/validator.handler");
const { createProductSchema, updateProdductSchema, getProductSchema } = require("../schemas/product.schema");

const router = express.Router();

const service = new ProductsServices();


router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

router.get("/filter/", (req, res) => {
  res.send("Yo soy un filtro")
});

router.get('/:id',
  validatorHandler(getProductSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);

router.post("/",
  validatorHandler(createProductSchema, "body"),
  async (req, res) => {
    const {name, price, img} = req.body;
    const product = await service.create({ name, price, img });
    res.status(201).json(product);
  }
)

router.patch("/:id",
  validatorHandler(getProductSchema, "params"),
  validatorHandler(updateProdductSchema, "body"),
  async (req, res, error) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const product = await service.update(id, body)
      res.json(product)
    } catch (error) {
      next(error);
    }
    }
);

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const rst = await service.delete(id)
  res.json(rst);
})


module.exports = router;
