
exports.up = function(knex) {
  return knex.schema.createTable('cards',table =>{
      table.increments()
      table.string('title', 255).notNullable()
      table.string('body', 1024).notNullable()
      // table.integer('position')
      table.integer('priority_id').notNullable().references('id').inTable('priorities')
      table.integer('status_id').notNullable().references('id').inTable('statuses')
      table.integer('created_by').notNullable().references('id').inTable('users')
      table.integer('assigned_to').references('id').inTable('users')
      table.timestamps(true,true)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('cards')
};
