import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import useMediaTypeStore from "../state-managment/type-store";
import type Videos from "../entities/Videos";

const useVideos = (id: number) => {
  const type = useMediaTypeStore((s) => s.type);
  const apiClient = new APIClient<Videos>(`/${type}/${id}/videos`);
  return useQuery({
    queryKey: [type, id, "videos"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    retry: 3,
  });
};

export default useVideos;
