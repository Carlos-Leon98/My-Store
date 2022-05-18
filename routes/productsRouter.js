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
  const body = req.body;
  const product = service.create(body);
  res.json(product);
})

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: "Update",
    data: body,
    id
  })
})

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: "Delete",
    id
  })
})


module.exports = router;
