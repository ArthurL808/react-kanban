
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cards').del()
    .then(function () {
      // Inserts seed entries
      return knex('cards').insert([
        {title: 'test card', body: 'this is a test', priority_id: '1',status_id: '1',created_by: '1',assigned_to: '1'},
      ]);
    });
};
