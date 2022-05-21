const Joi = require("joi");

const id = Joi.string().uuid();
const name = Joi.string().min(1).max(20);
const city = Joi.string().min(1).max(50);
const zipCode = Joi.string().min(5).max(5);
const state = Joi.string().min(2).max(2);

const createUserSchema = Joi.object({
  id: id.required(),
  name: name.required(),
  city: city.required(),
  zipCode: zipCode.required(),
  state: state.required()
});

const updateUserSchema = Joi.object({
  name: name,
  city: city,
  zipCode: zipCode,
  state: state
});

 const getUserSchema = Joi.object({
   id: id.required()
 });

 module.exports = {
   createUserSchema,
   updateUserSchema,
   getUserSchema
 }
