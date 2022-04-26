const request = require("supertest");
const app = require("../../src/app");
const truncate = require("../utils/truncate");
const { AcessUser } = require("../../src/app/models");

describe("Authentication", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should authenticated with valid credentials", async () => {
    const user = await AcessUser.create({
      name: "bruno achon",
      email: "brunoachon@hotmail.com",
      password: "123456",
    });

    const response = await request(app).post("/AcessUser").send({
      email: user.email,
      password: "123456",
    });

    expect(response.status).toBe(200);
  });

  //   test("should not authenticate with invalid credentials", async () => {
  //     // const user = await factory.create("User", {
  //     //   password: "FVN3UUR398HIERNC2929ENF2NC",
  //     // });
  //     const user = await AcessUser.create({
  //       name: "bruno achon",
  //       email: "brunoachon@hotmail.com",
  //       password: "123456",
  //     });

  //     const response = await request(app).post("/AcessUser").send({
  //       email: user.email,
  //       password: "123123",
  //     });

  //     expect(response.status).toBe(401);
  //   }, 10000);
});
