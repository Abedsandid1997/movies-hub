import { useInfiniteQuery } from "@tanstack/react-query";
import type Media from "../entities/Media";
import APIClient from "../services/api-client";
import useMediaTypeStore from "../state-managment/type-store";

const useMediaSimilar = (id: number) => {
  const type = useMediaTypeStore((s) => s.type);
  const apiClient = new APIClient<Media>(`/${type}/${id}/similar`);
  return useInfiniteQuery({
    queryKey: [type, id, "similar"],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          page: pageParam,
        },
      }),
    retry: 3,
    staleTime: 24 * 60 * 60 * 1000,
    getNextPageParam: (lastPage, allPages) => {
      return allPages.length < lastPage.total_pages
        ? allPages.length + 1
        : undefined;
    },
    initialPageParam: 1,
  });
};

export default useMediaSimilar;
