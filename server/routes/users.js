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

module.exports = router;
