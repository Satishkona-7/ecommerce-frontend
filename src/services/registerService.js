import { authApi } from "../api/api";

export const registerUser = async (
  username,
  password
) => {

  const response =
    await authApi.post(
      "/register",
      {
        username,
        password
      }
    );

  return response.data;
};