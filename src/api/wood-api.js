import Boom from "@hapi/boom";
import { db } from "../models/db.js";
import { IdSpec, WoodSpec, WoodSpecPlus, WoodArraySpec } from "../models/joi-schemas.js";
import { validationError } from "./logger.js";

export const woodApi = {
  find: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        const woods = await db.woodStore.getAllWoods();
        return woods;
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    response: { schema: WoodArraySpec, failAction: validationError },
    description: "Get all woodApi",
    notes: "Returns all woodApi",
  },

  findOne: {
    auth: {
      strategy: "jwt",
    },
    async handler(request) {
      try {
        const wood = await db.woodStore.getWoodById(request.params.id);
        if (!wood) {
          return Boom.notFound("No wood with this id");
        }
        return wood;
      } catch (err) {
        return Boom.serverUnavailable("No wood with this id");
      }
    },
    tags: ["api"],
    description: "Find a wood",
    notes: "Returns a wood",
    validate: { params: { id: IdSpec }, failAction: validationError },
    response: { schema: WoodSpecPlus, failAction: validationError },
  },

  create: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        const wood = await db.woodStore.addWood(request.params.id, request.payload);
        if (wood) {
          return h.response(wood).code(201);
        }
        return Boom.badImplementation("error creating wood");
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    description: "Create a wood",
    notes: "Returns the newly created wood",
    validate: { payload: WoodSpec },
    response: { schema: WoodSpecPlus, failAction: validationError },
  },

  deleteAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        await db.woodStore.deleteAllWoods();
        return h.response().code(204);
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    description: "Delete all woodApi",
  },

  deleteOne: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        const wood = await db.woodStore.getWoodById(request.params.id);
        if (!wood) {
          return Boom.notFound("No wood with this id");
        }
        await db.woodStore.deleteWood(wood._id);
        return h.response().code(204);
      } catch (err) {
        return Boom.serverUnavailable("No wood with this id");
      }
    },
    tags: ["api"],
    description: "Delete a wood",
    validate: { params: { id: IdSpec }, failAction: validationError },
  },
};
