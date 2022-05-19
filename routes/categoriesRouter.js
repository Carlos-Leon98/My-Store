const express = require("express");

const CategoriesService = require("../services/categories.service");

const router = express.Router();

const service = new CategoriesService();

router.get('/', async (req, res) => {
  const categories = await service.find();
  res.json(categories);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const category =  await service.findOne(id);
  res.status(200).json(category);
})

module.exports = router;
