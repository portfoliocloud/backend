exports.up = function(knex) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments();
    tbl
      .string("sub")
      .notNullable()
      .unique();
    tbl.string("firstName").notNullable();
    tbl.string("lastName").notNullable();
    tbl.string("email").notNullable();
    tbl.string("gitHub");
    tbl.text("aboutMe");
    tbl.string("avatarImg");
    tbl.string("headline");
    tbl.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
