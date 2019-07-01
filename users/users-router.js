const Users = require("./users-model");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  Users.findAll()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => console.log(err.message));
});
router.get("/:id", (req, res) => {
  const { id } = req.params;
  Users.findById(id)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => console.log(err.message));
});

module.exports = router;
