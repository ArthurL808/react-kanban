const User = require("./models/User");
const Cards = require('./models/Cards')
const Statuses = require('./models/Statuses')
const Priorities = require('./models/Prioritites')
module.exports = function(req, res, next) {
  req.db = { User: User, Cards:Cards, Statuses:Statuses, Priorities:Priorities
  };
  next();
};