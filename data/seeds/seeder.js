
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users-info').del()
    .then(function () {
      // Inserts seed entries
      return knex('users-info').insert([
        {id: 1, username: 'tyler123', password: 'test'},
        {id: 2, username: 'broadway456', password: 'test'},
        {id: 3, username: 'lambda2019', password: 'test'}
      ]);
    });
};
