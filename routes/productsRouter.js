const express = require("express");
const res = require("express/lib/response");
const ProductsServices = require("../services/product.service");

const router = express.Router();
const service = new ProductsServices();


router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

router.get("/filter/", (req, res) => {
  res.send("Yo soy un filtro")
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await service.findOne(id);
  res.json(product);
});

router.post("/",async (req, res) => {
  const {name, price, img} = req.body;
  const product = await service.create({ name, price, img });
  res.status(201).json(product);
})

router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body)
    res.json(product)
  } catch (error) {
    res.status(404).json({
      message: error.message,
    })
  }

})

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const rst = await service.delete(id)
  res.json(rst);
})


module.exports = router;
