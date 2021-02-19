const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  //Want to find out how to get the extended data for cards from withRelated call
  return req.db.Statuses.fetchAll({ withRelated: ["cards"] })
    .then((statuses) => {
      res.json(statuses);
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

router.put("/:id", (req, res) => {
  return req.db.Statuses.forge({ id: req.params.id })
    .save({}, { patch: true })
    .then((status) => {
      res.json(status);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
