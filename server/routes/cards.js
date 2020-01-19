const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return req.db.Cards.fetchAll({
    withRelated: ["assigned_to", "created_by", "status", "priority"]
  })
    .then(results => {
      res.json(results);
    })
    .catch(err => {
      console.log(err);
      res.json({status:500,message:'Could not find any cards.'})
    });
});

router.post("/", (req, res) => {
  let card = {
    title: req.body.title,
    body: req.body.body,
    priority_id: req.body.priority,
    status_id: 1,
    created_by: 1,
    assigned_to: 2
  };
  return req.db.Cards.forge(card)
    .save()
    .then(results => {
      res.json(results);
    })
    .catch(err => {
      console.log(err);
      res.json({ status: 500, message: "Could not post Card." });
    });
});

module.exports = router;
