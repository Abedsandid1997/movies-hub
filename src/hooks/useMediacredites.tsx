import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import useMediaTypeStore from "../state-managment/type-store";
import type Credits from "../entities/Credits";

const useMediacredites = (id: number) => {
  const type = useMediaTypeStore((s) => s.type);
  const apiClient = new APIClient<Credits>(`/${type}/${id}/credits`);
  return useQuery({
    queryKey: [type, id, "credits"],
    queryFn: apiClient.getMediaDetail,
    staleTime: 24 * 60 * 60 * 1000, //24h
    retry: 3,
  });
};

export default useMediacredites;
