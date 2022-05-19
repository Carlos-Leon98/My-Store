const express = require("express");
const { route } = require("express/lib/application");

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

router.post("/", async (req, res) => {
  const { CategoryName, CategoryDescription } = req.body;
  const category = await service.create({ CategoryName, CategoryDescription });
  res.status(201).json(category);
})

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const categoryDeleted = await service.delete(id);
    res.json(categoryDeleted);
  } catch (error) {
    res.status(404).json({
      messsage: error.messsage
    })
  }
})

router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const category = await service.update(id, data);
    res.json(category);
  } catch (error) {
    res.status(404).json({
      messsage: error.message
    })
  }
})

module.exports = router;
