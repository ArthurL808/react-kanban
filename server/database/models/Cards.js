const bookshelf = require("../bookshelf");

class Cards extends bookshelf.Model {
  get tableName() {
    return "cards";
  }
  get hasTimeStamps() {
    return true;
  }
  assigned_to() {
    return this.belongsTo("User");
  }
  created_by() {
    return this.belongsTo("User");
  }

  status() {
    return this.belongsTo("Statuses");
  }

  priority() {
    return this.belongsTo("Priorities");
  }
}
module.exports = bookshelf.model("Cards", Cards);
