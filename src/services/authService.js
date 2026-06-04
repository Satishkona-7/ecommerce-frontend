import { authApi } from "../api/api";

export const loginUser = async (
  username,
  password
) => {
  const response = await authApi.post(
    "/login",
    {
      username,
      password,
    }
  );

  return response.data;
};