
exports.up = function(knex) {
  return knex.schema.createTable('cards',table =>{
      table.increments()
      table.string('title').notNullable()
      table.string('body', 1024).notNullable()
      table.integer('priority_id').notNullable()
      table.foreign('priority_id').references('id').inTable('priorities')
      table.integer('status_id').notNullable()
      table.foreign('status_id').references('id').inTable('statuses')
      table.integer('created_by').notNullable()
      table.foreign('created_by').references('id').inTable('users')
      table.integer('assigned_to')
      table.foreign('assigned_to').references('id').inTable('users')
      table.timestamps(true,true)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('cards')
};
