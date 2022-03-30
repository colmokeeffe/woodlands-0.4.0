import axios from "axios";
import { maggie, serviceUrl } from "../fixtures.js";

export const woodlandsService = {
  woodlandsUrl: serviceUrl,

  async createUser(user) {
    const res = await axios.post(`${this.woodlandsUrl}/api/users`, user);
    return res.data;
  },

  async getUser(id) {
    const res = await axios.get(`${this.woodlandsUrl}/api/users/${id}`);
    return res.data;
  },

  async getAllUsers() {
    try {
      const res = await axios.get(`${this.woodlandsUrl}/api/users`);
      return res.data;
    } catch (e) {
      return null;
    }
  },

  async deleteAllUsers() {
    const res = await axios.delete(`${this.woodlandsUrl}/api/users`);
    return res.data;
  },

  async createCategory(category) {
    const res = await axios.post(`${this.woodlandsUrl}/api/categories`, category);
    return res.data;
  },

  async deleteAllCategories() {
    const response = await axios.delete(`${this.woodlandsUrl}/api/categories`);
    return response.data;
  },

  async deleteCategory(id) {
    const response = await axios.delete(`${this.woodlandsUrl}/api/categories/${id}`);
    return response;
  },

  async getAllCategories() {
    const res = await axios.get(`${this.woodlandsUrl}/api/categories`);
    return res.data;
  },

  async getCategory(id) {
    const res = await axios.get(`${this.woodlandsUrl}/api/categories/${id}`);
    return res.data;
  },

  async getAllWoods() {
    const res = await axios.get(`${this.woodlandsUrl}/api/woods`);
    return res.data;
  },

  async createWood(id, wood) {
    const res = await axios.post(`${this.woodlandsUrl}/api/categories/${id}/woods`, wood);
    return res.data;
  },

  async deleteAllWoods() {
    const res = await axios.delete(`${this.woodlandsUrl}/api/woods`);
    return res.data;
  },

  async getWood(id) {
    const res = await axios.get(`${this.woodlandsUrl}/api/woods/${id}`);
    return res.data;
  },

  async deleteWood(id) {
    const res = await axios.delete(`${this.woodlandsUrl}/api/woods/${id}`);
    return res.data;
  },

  async authenticate(user) {
    const response = await axios.post(`${this.woodlandsUrl}/api/users/authenticate`, user);
    axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
    return response.data;
  },

  async clearAuth() {
    axios.defaults.headers.common["Authorization"] = "";
  },
};
