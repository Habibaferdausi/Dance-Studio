import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import useAuth from "./useAuth";

const useAxios = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  const axiosHook = axios.create({
    baseURL: "http://localhost:4000",
  });

  // useEffect(() => {
  //   axiosHook.interceptors.request.use((config) => {
  //     const token = localStorage.getItem("access-token");
  //     if (token) {
  //       config.headers.Authorization = `Bearer ${token}`;
  //     }
  //     return config;
  //   });

  //   axiosHook.interceptors.response.use(
  //     (response) => response,
  //     async (error) => {
  //       if (
  //         error.response &&
  //         (error.response.status === 401 || error.response.status === 403)
  //       ) {
  //         await logOut();
  //         navigate("/login");
  //       }
  //       return Promise.reject(error);
  //     }
  //   );
  // }, [logOut, navigate, axiosHook]);

  return [axiosHook];
};

export default useAxios;
