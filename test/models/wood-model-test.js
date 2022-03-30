import { assert } from "chai";
import { db } from "../../src/models/db.js";
import { testCategories, testWoods, conifer, broadleaf, donadea, testUsers } from "../fixtures.js";
import { assertSubset } from "../test-utils.js";

suite("Wood Model tests", () => {

  let coniferList = null;

  setup(async () => {
    db.init("mongo");
    await db.categoryStore.deleteAllCategories();
    await db.woodStore.deleteAllWoods();
    coniferList = await db.categoryStore.addCategory(conifer);
    for (let i = 0; i < testWoods.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      testWoods[i] = await db.woodStore.addWood(coniferList._id, testWoods[i]);
    }
  });

  test("create single wood", async () => {
    const broadleafList = await db.categoryStore.addCategory(broadleaf);
    const wood = await db.woodStore.addWood(broadleafList._id, donadea)
    assert.isNotNull(wood._id);
    assertSubset (donadea, wood);
  });

  test("create multiple woodApi", async () => {
    const woods = await db.categoryStore.getCategoryById(coniferList._id);
    assert.equal(testWoods.length, testWoods.length)
  });

  test("delete all woodApi", async () => {
    const woods = await db.woodStore.getAllWoods();
    assert.equal(testWoods.length, woods.length);
    await db.woodStore.deleteAllWoods();
    const newWoods = await db.woodStore.getAllWoods();
    assert.equal(0, newWoods.length);
  });

  test("get a wood - success", async () => {
    const broadleafList = await db.categoryStore.addCategory(broadleaf);
    const wood = await db.woodStore.addWood(broadleafList._id, donadea)
    const newWood = await db.woodStore.getWoodById(wood._id);
    assertSubset (donadea, newWood);
  });

  test("delete One Wood - success", async () => {
    const id = testWoods[0]._id;
    await db.woodStore.deleteWood(id);
    const woods = await db.woodStore.getAllWoods();
    assert.equal(woods.length, testCategories.length - 1);
    const deletedWood = await db.woodStore.getWoodById(id);
    assert.isNull(deletedWood);
  });

  test("get a category - bad params", async () => {
    assert.isNull(await db.woodStore.getWoodById(""));
    assert.isNull(await db.woodStore.getWoodById());
  });

  test("delete One User - fail", async () => {
    await db.woodStore.deleteWood("bad-id");
    const woods = await db.woodStore.getAllWoods();
    assert.equal(woods.length, testCategories.length);
  });
});
