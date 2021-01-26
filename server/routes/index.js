const cardRoutes = require("./cards");
const authRoutes = require("./auth");
const userRoutes = require("./users");

module.exports = {
  cards: cardRoutes,
  auth: authRoutes,
  users: userRoutes,
};
