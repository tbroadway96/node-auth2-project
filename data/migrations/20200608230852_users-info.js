
exports.up = function(knex) {
    return (
        knex.schema
          .createTable('users-info', tbl => {
              tbl.increments('id');
              tbl.string('username', 128).notNullable();
              tbl.string('password', 128).notNullable();
          })
    )
};

exports.down = function(knex) {
    return (
        knex.schema
          .dropTableIfExist('users-info')
    )
};
