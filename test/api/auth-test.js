import { assert } from "chai";
import { woodlandsService } from "./woodlands-service.js";
import { decodeToken } from "../../src/api/jwt-utils.js";
import { maggie } from "../fixtures.js";

suite("Authentication API tests", async () => {
  setup(async () => {
    woodlandsService.clearAuth();
    await woodlandsService.createUser(maggie);
    await woodlandsService.authenticate(maggie);
    await woodlandsService.deleteAllUsers();
  });

  test("authenticate", async () => {
    const returnedUser = await woodlandsService.createUser(maggie);
    const response = await woodlandsService.authenticate(maggie);
    assert(response.success);
    assert.isDefined(response.token);
  });

  test("verify Token", async () => {
    const returnedUser = await woodlandsService.createUser(maggie);
    const response = await woodlandsService.authenticate(maggie);

    const userInfo = decodeToken(response.token);
    assert.equal(userInfo.email, returnedUser.email);
    assert.equal(userInfo.userId, returnedUser._id);
  });

  test("check Unauthorized", async () => {
    woodlandsService.clearAuth();
    try {
      await woodlandsService.deleteAllUsers();
      assert.fail("Route not protected");
    } catch (error) {
      assert.equal(error.response.data.statusCode, 401);
    }
  });
});
