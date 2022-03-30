import { WoodSpec } from "../models/joi-schemas.js";
import { db } from "../models/db.js";

export const categoryController = {
  index: {
    handler: async function (request, h) {
      const category = await db.categoryStore.getCategoryById(request.params.id);
      const viewData = {
        title: "Category",
        category: category,
      };
      return h.view("category-view", viewData);
    },
  },

  addWood: {
    validate: {
      payload: WoodSpec,
      options: { abortEarly: false },
      failAction: function (request, h, error) {
        return h.view("category-view", { title: "Add wood error", errors: error.details }).takeover().code(400);
      },
    },
    handler: async function (request, h) {
      const category = await db.categoryStore.getCategoryById(request.params.id);
      const newWood = {
        title: request.payload.title,
        description: request.payload.description,
        latitude: Number(request.payload.latitude),
        longitude: Number(request.payload.longitude),
      };
      await db.woodStore.addWood(category._id, newWood);
      return h.redirect(`/category/${category._id}`);
    },
  },

  deleteWood: {
    handler: async function (request, h) {
      const category = await db.categoryStore.getCategoryById(request.params.id);
      await db.woodStore.deleteWood(request.params.woodid);
      return h.redirect(`/category/${category._id}`);
    },
  },
};
