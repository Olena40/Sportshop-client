import { $authHost, $host } from "./indexAPI";

export const createCategory = async (category) => {
  const { data } = await $authHost.post("api/category", category);
  return data;
};

export const fetchCategories = async () => {
  const { data } = await $host.get("api/category");
  return data;
};

export const createPost = async (post) => {
  const { data } = await $authHost.post("api/post", post);
  return data;
};

export const fetchPosts = async (categoryId) => {
  const { data } = await $host.get("api/post", {
    params: {
      categoryId,
    },
  });
  return data;
};

export const fetchOnePost = async (id) => {
  const { data } = await $host.get("api/post/" + id);
  return data;
};
