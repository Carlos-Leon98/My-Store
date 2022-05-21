const express = require("express");
const UsersServices = require("../services/users.service");
const { createUserSchema, updateUserSchema, getUserSchema } = require("../schemas/users.schema");
const validatorHandler = require("../middlewares/validator.handler");

const router = express.Router();

const service = new UsersServices();

router.get("/", (req, res) => {
  const users = service.find();
  res.status(200).json(users);
});

router.get("/:id",
  validatorHandler(getUserSchema, "params"),
  async (req, res) => {
    const { id } = req.params;
    const user = await service.findOne(id);
    res.status(200).json(user);
  }
)

router.post("/",
  validatorHandler(createUserSchema, "body"),
  async (req, res) => {
    const body = req.body;
    const user = await service.create(body);
    res.status(201).json(user);
  }
)

router.patch("/:id",
  validatorHandler(getUserSchema, "params"),
  validatorHandler(updateUserSchema, "body"),
  async (req, res) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const user = await service.update(id, body);
      res.status(200).json(user);
    } catch (error) {
      res.status(404).json({
        message: error.message,
      })
    }
  }
)

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const userDeleted = service.delete(id);
    res.json(200).json(userDeleted);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    })
  }
})

module.exports = router;
