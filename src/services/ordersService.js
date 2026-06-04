import { orderApi } from "../api/api";

export const getOrders = async () => {

  const token =
    localStorage.getItem("token");

  const response =
    await orderApi.get(
      "/orders",
      {
        headers: {
          Authorization:
            `Bearer ${token}`
        }
      }
    );

  return response.data;
};