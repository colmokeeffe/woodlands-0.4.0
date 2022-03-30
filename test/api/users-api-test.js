import { assert } from "chai";
import { assertSubset } from "../test-utils.js";
import { woodlandsService } from "./woodlands-service.js";
import { maggie, maggieCredentials, testUsers } from "../fixtures.js";
import { db } from "../../src/models/db.js";

const users = new Array(testUsers.length);

suite("User API tests", () => {
  setup(async () => {
    woodlandsService.clearAuth();
    await woodlandsService.createUser(maggie);
    await woodlandsService.authenticate(maggieCredentials);
    await woodlandsService.deleteAllUsers();
    for (let i = 0; i < testUsers.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      users[0] = await woodlandsService.createUser(testUsers[i]);
    }
    await woodlandsService.createUser(maggie);
    await woodlandsService.authenticate(maggieCredentials);
  });
  teardown(async () => {});

  test("create a user", async () => {
    const newUser = await woodlandsService.createUser(maggie);
    assertSubset(maggie, newUser);
    assert.isDefined(newUser._id);
  });

  test("delete all user", async () => {
    let returnedUsers = await woodlandsService.getAllUsers();
    assert.equal(returnedUsers.length, 4);
    await woodlandsService.deleteAllUsers();
    await woodlandsService.createUser(maggie);
    await woodlandsService.authenticate(maggieCredentials);
    returnedUsers = await woodlandsService.getAllUsers();
    assert.equal(returnedUsers.length, 1);
  });

  test("get a user", async () => {
    const returnedUser = await woodlandsService.getUser(users[0]._id);
    assert.deepEqual(users[0], returnedUser);
  });

  test("get a user - bad id", async () => {
    try {
      const returnedUser = await woodlandsService.getUser("1234");
      assert.fail("Should not return a response");
    } catch (error) {
      assert(error.response.data.message === "No User with this id");
      assert.equal(error.response.data.statusCode, 503);
    }
  });

  test("get a user - deleted user", async () => {
    await woodlandsService.deleteAllUsers();
    await woodlandsService.createUser(maggie);
    await woodlandsService.authenticate(maggieCredentials);
    try {
      const returnedUser = await woodlandsService.getUser(users[0]._id);
      assert.fail("Should not return a response");
    } catch (error) {
      assert(error.response.data.message === "No User with this id");
      assert.equal(error.response.data.statusCode, 404);
    }
  });
});
