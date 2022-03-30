import { userApi } from "./api/user-api.js";
import { categoryApi } from "./api/category-api.js";
import { woodApi } from "./api/wood-api.js";

export const apiRoutes = [
  { method: "GET", path: "/api/users", config: userApi.find },
  { method: "POST", path: "/api/users", config: userApi.create },
  { method: "DELETE", path: "/api/users", config: userApi.deleteAll },
  { method: "GET", path: "/api/users/{id}", config: userApi.findOne },

  { method: "POST", path: "/api/users/authenticate", config: userApi.authenticate },

  { method: "POST", path: "/api/categories", config: categoryApi.create },
  { method: "DELETE", path: "/api/categories", config: categoryApi.deleteAll },
  { method: "GET", path: "/api/categories", config: categoryApi.find },
  { method: "GET", path: "/api/categories/{id}", config: categoryApi.findOne },
  { method: "DELETE", path: "/api/categories/{id}", config: categoryApi.deleteOne },

  { method: "GET", path: "/api/woods", config: woodApi.find },
  { method: "GET", path: "/api/woods/{id}", config: woodApi.findOne },
  { method: "POST", path: "/api/categories/{id}/woods", config: woodApi.create },
  { method: "DELETE", path: "/api/woods", config: woodApi.deleteAll },
  { method: "DELETE", path: "/api/woods/{id}", config: woodApi.deleteOne },
];
