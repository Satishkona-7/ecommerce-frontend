import { cartApi } from "../api/api";

export const addCartItem = async (
  productId,
  quantity
) => {

  const token =
    localStorage.getItem("token");

  const response =
    await cartApi.post(
      "/cart",
      {
        product_id: productId,
        quantity: quantity
      },
      {
        headers: {
          Authorization:
            `Bearer ${token}`
        }
      }
    );

  return response.data;
};

export const getCart = async () => {

  const token =
    localStorage.getItem("token");

  const response =
    await cartApi.get(
      "/my-cart",
      {
        headers: {
          Authorization:
            `Bearer ${token}`
        }
      }
    );

  return response.data;
};