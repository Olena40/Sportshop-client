import { makeAutoObservable } from "mobx";

// Global storage

export default class PostStore {
  constructor() {
    this._categories = [];
    this._posts = [];
    this._selectedCategory = {};
    makeAutoObservable(this);
  }

  setCategories(categories) {
    this._categories = categories;
  }

  setPosts(posts) {
    this._posts = posts;
  }
  setSelectedCategory(category) {
    this._selectedCategory = category;
  }

  //////////////////////////////////////
  get categories() {
    return this._categories;
  }
  get posts() {
    return this._posts;
  }
  get selectedCategory() {
    return this._selectedCategory;
  }
}
