import { assert } from "chai";
import { woodlandsService } from "./woodlands-service.js";
import { assertSubset } from "../test-utils.js";
import { maggie, maggieCredentials, broadleaf, testCategories } from "../fixtures.js";

suite("Category API tests", () => {

  let user = null;

  setup(async () => {
    woodlandsService.clearAuth();
    user = await woodlandsService.createUser(maggie);
    await woodlandsService.authenticate(maggieCredentials);
    await woodlandsService.deleteAllCategories();
    await woodlandsService.deleteAllUsers();
    user = await woodlandsService.createUser(maggie);
    await woodlandsService.authenticate(maggieCredentials);
    broadleaf.userid = user._id;
  });

  teardown(async () => {});

  test("create category", async () => {
    const returnedCategory = await woodlandsService.createCategory(broadleaf);
    assert.isNotNull(returnedCategory);
    assertSubset(broadleaf, returnedCategory);
  });

  test("delete a category", async () => {
    const category = await woodlandsService.createCategory(broadleaf);
    const response = await woodlandsService.deleteCategory(category._id);
    assert.equal(response.status, 204);
    try {
      const returnedCategory = await woodlandsService.getCategory(category.id);
      assert.fail("Should not return a response");
    } catch (error) {
      assert(error.response.data.message === "No Category with this id", "Incorrect Response Message");
    }
  });

  test("create multiple categories", async () => {
    for (let i = 0; i < testCategories.length; i += 1) {
      testCategories[i].userid = user._id;
      // eslint-disable-next-line no-await-in-loop
      await woodlandsService.createCategory(testCategories[i]);
    }
    let returnedLists = await woodlandsService.getAllCategories();
    assert.equal(returnedLists.length, testCategories.length);
    await woodlandsService.deleteAllCategories();
    returnedLists = await woodlandsService.getAllCategories();
    assert.equal(returnedLists.length, 0);
  });

  test("remove non-existent category", async () => {
    try {
      const response = await woodlandsService.deleteCategory("not an id");
      assert.fail("Should not return a response");
    } catch (error) {
      assert(error.response.data.message === "No Category with this id", "Incorrect Response Message");
    }
  });
});
