import { Wood } from "./wood.js";
import { Category } from "./category.js";

export const woodMongoStore = {
  async getAllWoods() {
    const woods = await Wood.find().lean();
    return woods;
  },

  async addWood(categoryId, wood) {
    wood.categoryid = categoryId;
    const newWood = new Wood(wood);
    const woodObj = await newWood.save();
    return this.getWoodById(woodObj._id);
  },

  async getWoodsByCategoryId(id) {
    const woods = await Wood.find({ categoryid: id }).lean();
    return woods;
  },

  async getWoodById(id) {
    if (id) {
      const wood = await Wood.findOne({ _id: id }).lean();
      return wood;
    }
    return null;
  },

  async deleteWood(id) {
    try {
      await Wood.deleteOne({ _id: id });
    } catch (error) {
      console.log("bad id");
    }
  },

  async deleteAllWoods() {
    await Wood.deleteMany({});
  },

  async updateWood(wood, updatedWood) {
    wood.title = updatedWood.title;
    wood.description = updatedWood.description;
    wood.latitude = updatedWood.latitude;
    wood.longitude = updatedWood.longitude;
    await wood.save();
  },
};
