import { catalogApi } from "../api/api";

export const getProducts = async () => {
  const response =
    await catalogApi.get("/products");

  return response.data;
};