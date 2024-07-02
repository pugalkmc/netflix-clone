import axiosInstance from "./axiosInstance";

export const getUserDetails = async () => {
  return await axiosInstance.get('/users/me');
};

export const updateUserDetails = async (userDetails) => {
  return await axiosInstance.put('/users/me', userDetails);
};