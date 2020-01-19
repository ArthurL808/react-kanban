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
      res.json({ status: 500, message: "Could not find any cards." });
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

router.put("/:id", (req, res) => {
  let newCard = {
    title: req.body.title,
    body: req.body.body,
    priority_id: req.body.priority,
    status_id: req.body.status,
    created_by: 1,
    assigned_to: 2
  };
  return req.db.Cards.forge({ id: req.params.id })
    .save(newCard)
    .then(results => {
      res.json(results);
    })
    .catch(err => {
      console.log(err);
      res.json({
        status: 500,
        message: "Unable to edit card, please try again later."
      });
    });
});

router.delete("/:id", (req, res) => {
  return req.db.Cards.where({ id: req.params.id })
    .destroy()
    .then(() => {
        res.json({status:200, message:'You have Deleted the card!'})
    })
    .catch(err => {
      console.log(err);
      res.json({
        status: 500,
        message: "Unable to Delete card, please try again later."
      });
    });
});
module.exports = router;
