import { orderApi } from "../api/api";

export const checkout = async () => {

  const token =
    localStorage.getItem("token");

  const response =
    await orderApi.post(
      "/orders",
      {},
      {
        headers: {
          Authorization:
            `Bearer ${token}`
        }
      }
    );

  return response.data;
};