const bcrypt = require("bcryptjs");

//const factory = require("../factories");
const truncate = require("../utils/truncate");
const { AcessUser } = require("../../src/app/models");

describe("User", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should encrypt user password", async () => {
    const user = await AcessUser.create({
      name: "bruno achon",
      email: "brunoachon@hotmail.com",
      password: "FVN3UUR398HIERNC2929ENF2NC",
    });

    const comparehash = await bcrypt.compare(
      "FVN3UUR398HIERNC2929ENF2NC",
      user.password_hash
    );
    expect(comparehash).toBe(true);
  });
});
