import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import useMovieQueryStore from "../state-managment/movie-store";
import useMediaTypeStore from "../state-managment/type-store";
import type Media from "../entities/Media";

const useMedia = () => {
  const searchText = useMovieQueryStore((s) => s.movieQuery.searchText);
  const type = useMediaTypeStore((s) => s.type);
  const endPoint = searchText
    ? `/search/${type}?query=${searchText}`
    : `/discover/${type}`;
  const apiClient = new APIClient<Media>(endPoint);

  const movieQuery = useMovieQueryStore((s) => s.movieQuery);
  return useInfiniteQuery({
    queryKey: ["movies", movieQuery, type],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          page: pageParam,
          with_genres: movieQuery.genreId,
          query: movieQuery.searchText,
          sort_by: movieQuery.sortBy,
          include_adult: movieQuery.withAdult,
        },
      }),
    retry: 3,
    staleTime: 24 * 60 * 60 * 1000, // 24h,
    getNextPageParam: (lastPage, allPages) => {
      return allPages.length < lastPage.total_pages
        ? allPages.length + 1
        : undefined;
    },
    initialPageParam: 1,
  });
};

export default useMedia;
