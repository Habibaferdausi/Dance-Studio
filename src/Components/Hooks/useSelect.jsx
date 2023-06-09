import React from "react";
import useAuth from "./useAuth";
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";

const useSelect = () => {
  const { user, loading } = useAuth();

  // const token = localStorage.getItem('access-token');
  const [axiosHook] = useAxios();
  const { refetch, data: select = [] } = useQuery({
    queryKey: ["selects", user?.email],
    enabled: !loading,

    queryFn: async () => {
      const res = await axiosHook(`/selects?email=${user?.email}`);
      console.log("Get from axios", res);
      return res.data;
    },
  });

  return [select, refetch];
};

export default useSelect;
