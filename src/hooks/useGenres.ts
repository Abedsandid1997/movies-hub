import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import type Genre from "../entities/Genre";
import useMediaTypeStore from "../state-managment/type-store";

const useGenres = () => {
  const type = useMediaTypeStore((s) => s.type);

  const apiClient = new APIClient<Genre>(`/genre/${type}/list`);

  return useQuery({
    queryKey: ["genres", type],
    queryFn: apiClient.getAllGenres,
    staleTime: 24 * 60 * 60 * 1000, //24h
    retry: 3,
  });
};

export default useGenres;
