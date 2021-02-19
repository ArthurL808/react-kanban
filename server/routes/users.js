const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return req.db.User.fetchAll()
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/:id", (req, res) => {
  return req.db.User.where({ id: req.params.id })
    .fetch()
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.put("/:id/edit", (req, res) => {
  return req.db.User.forge({ id: req.params.id })
    .save({}, { patch: true })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
