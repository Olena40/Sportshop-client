import { $authHost, $host } from "./indexAPI";

export const createType = async (type) => {
  const { data } = await $authHost.post("api/type", type);
  return data;
};

export const deleteType = async (type) => {
  const { data } = await $authHost.delete("api/type", type);
  return data;
};

export const fetchTypes = async () => {
  const { data } = await $host.get("api/type");
  return data;
};

export const createBrand = async (brand) => {
  const { data } = await $authHost.post("api/brand", brand);
  return data;
};

export const fetchBrands = async () => {
  const { data } = await $host.get("api/brand");
  return data;
};

export const createSportgood = async (sportgood) => {
  const { data } = await $authHost.post("api/sportgood", sportgood);
  return data;
};

export const fetchSportgoods = async (typeId, brandId, page, limit = 5) => {
  const { data } = await $host.get("api/sportgood", {
    params: {
      typeId,
      brandId,
      page,
      limit,
    },
  });
  return data;
};

export const fetchOneSportgood = async (id) => {
  const { data } = await $host.get("api/sportgood/" + id);
  return data;
};
