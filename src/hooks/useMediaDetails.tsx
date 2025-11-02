import { useQuery } from "@tanstack/react-query";
import type Media from "../entities/Media";
import APIClient from "../services/api-client";

const useMediaDeatils = (type: string, id: number) => {
  const apiClient = new APIClient<Media>(`/${type}/${id}`);
  return useQuery({
    queryKey: [type, id,"details"],
    queryFn: apiClient.getMediaDetail,
    staleTime: 24 * 60 * 60 * 1000, //24h
    retry: 3,
  });
};

export default useMediaDeatils;
