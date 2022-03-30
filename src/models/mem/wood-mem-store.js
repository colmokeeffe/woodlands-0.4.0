import { v4 } from "uuid";

let woods = [];

export const woodMemStore = {
  async getAllWoods() {
    return woods;
  },

  async addWood(categoryId, wood) {
    wood._id = v4();
    wood.categoryid = categoryId;
    woods.push(wood);
    return wood;
  },

  async getWoodsByCategoryId(id) {
    return woods.filter((wood) => wood.categoryid === id);
  },

  async getWoodById(id) {
    let wood = woods.find((wood) => wood._id === id);
    if (wood == undefined) {
      wood = null;
    }
    return wood;
  },

  async getCategoryWoods(categoryId) {
    return woods.filter((wood) => wood.categoryid === categoryId);
  },

  async deleteWood(id) {
    const index = woods.findIndex((wood) => wood._id === id);
    if (index !== -1) woods.splice(index, 1);
  },

  async deleteAllWoods() {
    woods = [];
  },

  async updateWood(wood, updatedWood) {
    wood.title = updatedWood.title;
    wood.description = updatedWood.description;
    wood.latitude = updatedWood.latitude;
    wood.longitude = updatedWood.longitude;
  },
};
