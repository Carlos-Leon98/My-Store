const express = require("express");
const res = require("express/lib/response");
const ProductsServices = require("../services/product.service");

const router = express.Router();
const service = new ProductsServices();


router.get('/', (req, res) => {
  const products = service.find();
  res.json(products);
});

router.get("/filter/", (req, res) => {
  res.send("Yo soy un filtro")
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.findOne(id);
  res.json(product);
});

router.post("/", (req, res) => {
  const {name, price, img} = req.body;
  const product = service.create({ name, price, img });
  res.status(201).json(product);
})

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = service.update(id, body)
  res.json(product)
})

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const rst = service.delete(id)
  res.json(rst);
})


module.exports = router;
