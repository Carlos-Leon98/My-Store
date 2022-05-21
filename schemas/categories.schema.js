const Joi = require("joi");

const id = Joi.string().uuid();
const CategoryName = Joi.string().min(3).max(10);
const CategoryDescription = Joi.string().min(10).max(50);


const createCategorySchema = Joi.object({
  id: id.required(),
  CategoryName: CategoryName.required(),
  CategoryDescription: CategoryDescription.required()
})

const updateCategorySchema = Joi.object({
  id: id,
  CategoryName: CategoryName,
  CategoryDescription: CategoryDescription
})

const getCategorySchema = Joi.object({
  id: id.required()
})

module.exports = {
  createCategorySchema,
  updateCategorySchema,
  getCategorySchema
}
