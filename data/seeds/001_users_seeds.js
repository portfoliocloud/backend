const faker = require("faker");
exports.seed = function(knex) {
  let userArray = [];
  const numberOfUsers = process.env.NUMBER_OF_USERS || 50;
  // Deletes ALL existing entries

  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      for (let i = 0; i < numberOfUsers; i++) {
        let userName = faker.internet.userName();
        let user = {};
        user.sub = (i + 1).toString();
        user.firstName = faker.name.firstName();
        user.lastName = faker.name.lastName();
        user.email = faker.internet.email();
        user.gitHub = `https://www.linkedin.com/in/${userName}`;
        user.headline = faker.hacker.phrase();
        user.aboutMe = faker.lorem.paragraphs();
        user.avatarImg = faker.image.avatar();
        userArray.push(user);
      }
      return knex("users").insert(userArray);
    })
    .catch(err => console.log(err.message));
};
