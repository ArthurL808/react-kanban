exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { first_name: "Arthur", last_name: 'Lee', email: 'ArthurL@newmail.com' },
        { first_name: "Mel", last_name: 'js', email: 'Meljs@newmail.com' },
        { first_name: "Brad", last_name: 'Mckinny', email: 'BadMckinny@newmail.com' }
      ]);
    });
};
