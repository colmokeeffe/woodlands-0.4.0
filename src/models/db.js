import { userMemStore } from "./mem/user-mem-store.js";
import { categoryMemStore } from "./mem/category-mem-store.js";
import { woodMemStore } from "./mem/wood-mem-store.js";
import { userJsonStore } from "./json/user-json-store.js";
import { categoryJsonStore } from "./json/category-json-store.js";
import { woodJsonStore } from "./json/wood-json-store.js";
import { userMongoStore } from "./mongo/user-mongo-store.js";
import { categoryMongoStore } from "./mongo/category-mongo-store.js";
import { woodMongoStore } from "./mongo/wood-mongo-store.js";
import { connectMongo } from "./mongo/connect.js";

export const db = {
  userStore: null,
  categoryStore: null,
  woodStore: null,

  init(storeType) {
    switch (storeType) {
      case "json" :
        this.userStore = userJsonStore;
        this.categoryStore = categoryJsonStore;
        this.woodStore = woodJsonStore;
        break;
      case "mongo" :
        this.userStore = userMongoStore;
        this.categoryStore = categoryMongoStore;
        this.woodStore = woodMongoStore;
        connectMongo();
        break;
      default :
        this.userStore = userMemStore;
        this.categoryStore = categoryMemStore;
        this.woodStore = woodMemStore;
    }
  }
};
