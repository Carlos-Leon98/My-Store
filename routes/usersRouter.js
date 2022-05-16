const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  const { userName, role, userID } = req.query;
  if (userName && role && userID) {
    res.status(200).json({
      userID,
      userName,
      role
    });
  } else {
    res.send("no params please enter, params")
  }
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    id,
    message: "We found the user"
  })
})

router.post("/", (req, res) => {
  const body = req.body;
  res.status(200).json({
    message: "Created",
    date: body
  })
})

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.status(200).json({
    message: "User Mdified",
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
