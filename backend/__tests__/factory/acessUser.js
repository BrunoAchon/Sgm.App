const faker = require("faker");
const { factory } = require("factory-girl");
const { AcessUser } = require("../../src/app/models");

factory.define("AcessUser", AcessUser, {
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  password_expiration: faker.datatype.boolean(),
  password_blocked: faker.datatype.boolean(),
  phone: faker.phone.phoneNumber("(##) ####-####"),
  phone_confirm: faker.datatype.boolean(),
  two_factor: faker.datatype.boolean(),
  lockout_end: faker.datatype.datetime(),
  acess_failed_count: faker.datatype.number({ min: 0, max: 3 }),
});

module.exports = factory;
