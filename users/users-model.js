const db = require("../data/dbConfig");

module.exports = {
  findAll,
  findById
};

function findAll() {
  return db("users");
}
function findById(id) {
  return db("users")
    .where({ id })
    .first();
}
