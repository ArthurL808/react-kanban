const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return req.db.Cards.fetchAll({
    withRelated: ["assigned_to", "created_by", "status", "priority"],
  })
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      console.log(err);
      res.json({ status: 500, message: "Could not find any cards." });
    });
});

router.post("/", (req, res) => {
  let card = {
    title: req.body.titleInput,
    body: req.body.bodyInput,
    priority_id: req.body.priorityInput,
    status_id: 1,
    created_by: null,
    assigned_to: null,
  };
  req.db.User.where({
    first_name: req.body.created_byInput.first_name,
    last_name: req.body.created_byInput.last_name,
  })
    .fetch()
    .then((results) => {
      let created_byData = results.toJSON();
      card.created_by = created_byData.id;

      req.db.User.where({
        first_name: req.body.assigned_toInput.first_name,
        last_name: req.body.assigned_toInput.last_name,
      })
        .fetch()
        .then((results) => {
          let assigned_toData = results.toJSON();
          card.assigned_to = assigned_toData.id;

          return req.db.Cards.forge(card)
            .save()
            .then((results) => {
              req.db.Cards.where({ id: results.id })
                .fetch({
                  withRelated: [
                    "assigned_to",
                    "created_by",
                    "status",
                    "priority",
                  ],
                })
                .then((response) => {
                  res.json(response);
                })
                .catch((err) => {
                  console.log(err);
                  res.json({
                    status: 500,
                    message: "Could not find related Info.",
                  });
                });
            })
            .catch((err) => {
              console.log(err);
              res.json({ status: 500, message: "Could not post Card." });
            });
        });
    });
});

router.put("/:id", (req, res) => {
  let newCard = {
    title: req.body.title,
    body: req.body.body,
    priority_id: req.body.priority,
    status_id: req.body.status,
    created_by: 1,
    assigned_to: 2,
  };
  return req.db.Cards.forge({ id: req.params.id })
    .save(newCard)
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        status: 500,
        message: "Unable to edit card, please try again later.",
      });
    });
});

router.delete("/:id", (req, res) => {
  return req.db.Cards.where({ id: req.params.id })
    .destroy()
    .then(() => {
      res.json({ status: 200, message: "You have Deleted the card!" });
    })
    .catch((err) => {
      console.log(err);
      res.json({
        status: 500,
        message: "Unable to Delete card, please try again later.",
      });
    });
});
module.exports = router;
