const cardRoutes = require("./cards");
const authRoutes = require("./auth");
const userRoutes = require("./users");
const statusRoutes = require("./statuses");

module.exports = {
  cards: cardRoutes,
  auth: authRoutes,
  users: userRoutes,
  statuses: statusRoutes,
};
