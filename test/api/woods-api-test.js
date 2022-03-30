import { assert } from "chai";
import { assertSubset } from "../test-utils.js";
import { woodlandsService } from "./woodlands-service.js";
import { maggie, maggieCredentials, broadleaf, testCategories, testWoods, donadea} from "../fixtures.js";

suite("Wood API tests", () => {
  let user = null;
  let woodsTrail = null;

  setup(async () => {
    woodlandsService.clearAuth();
    user = await woodlandsService.createUser(maggie);
    await woodlandsService.authenticate(maggieCredentials);
    await woodlandsService.deleteAllCategories();
    await woodlandsService.deleteAllWoods();
    await woodlandsService.deleteAllUsers();
    user = await woodlandsService.createUser(maggie);
    await woodlandsService.authenticate(maggieCredentials);
    broadleaf.userid = user._id;
    woodsTrail = await woodlandsService.createCategory(broadleaf);
  });

  teardown(async () => {});

  test("create wood", async () => {
    const returnedWood = await woodlandsService.createWood(woodsTrail._id, donadea);
    assertSubset(donadea, returnedWood);
  });

  test("create Multiple woods", async () => {
    for (let i = 0; i < testWoods.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await woodlandsService.createWood(woodsTrail._id, testWoods[i]);
    }
    const returnedWoods = await woodlandsService.getAllWoods();
    assert.equal(returnedWoods.length, testWoods.length);
    for (let i = 0; i < returnedWoods.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      const wood = await woodlandsService.getWood(returnedWoods[i]._id);
      assertSubset(wood, returnedWoods[i]);
    }
  });

  test("Delete WoodApi", async () => {
    for (let i = 0; i < testWoods.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await woodlandsService.createWood(woodsTrail._id, testWoods[i]);
    }
    let returnedWoods = await woodlandsService.getAllWoods();
    assert.equal(returnedWoods.length, testWoods.length);
    for (let i = 0; i < returnedWoods.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      const wood = await woodlandsService.deleteWood(returnedWoods[i]._id);
    }
    returnedWoods = await woodlandsService.getAllWoods();
    assert.equal(returnedWoods.length, 0);
  });

  test("denormalised category", async () => {
    for (let i = 0; i < testWoods.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await woodlandsService.createWood(woodsTrail._id, testWoods[i]);
    }
    const returnedCategory = await woodlandsService.getCategory(woodsTrail._id);
    assert.equal(returnedCategory.woods.length, testWoods.length);
    for (let i = 0; i < testWoods.length; i += 1) {
      assertSubset(testWoods[i], returnedCategory.woods[i]);
    }
  });
});
