const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return req.db.Statuses.fetchAll()
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/", (req, res) => {
  return req.db.Statuses.forge({ name: req.body.name, rank: req.body.rank })
    .save()
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
