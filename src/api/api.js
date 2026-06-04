import axios from "axios";

export const authApi = axios.create({
  baseURL: import.meta.env.VITE_AUTH_URL,
});

export const catalogApi = axios.create({
  baseURL: import.meta.env.VITE_CATALOG_URL,
});

export const cartApi = axios.create({
  baseURL: import.meta.env.VITE_CART_URL,
});

export const orderApi = axios.create({
  baseURL: import.meta.env.VITE_ORDER_URL,
});

export const userApi = axios.create({
  baseURL: import.meta.env.VITE_USER_URL,
});

export const adminApi = axios.create({
  baseURL: import.meta.env.VITE_ADMIN_URL,
});