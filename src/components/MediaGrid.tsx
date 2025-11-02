import { Box, SimpleGrid, Spinner } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import React from "react";
import MovieGridContainer from "./MovieGridContainer";
import MovieGridSkeleton from "./skeletons/MovieGridSkeleton";
import type { InfiniteData } from "@tanstack/react-query";
import type { fetchResponse } from "../services/api-client";
import type Media from "../entities/Media";
import ItemCard from "./ItemCard";

interface MediaGridProps {
  data?: InfiniteData<fetchResponse<Media>>;
  error?: Error | null;
  isLoading: boolean;
  fetchNextPage: () => void;
  hasNextPage?: boolean;
}

function MediaGrid({
  data,
  error,
  isLoading,
  fetchNextPage,
  hasNextPage,
}: MediaGridProps) {
  const itemCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) ?? 0;

  if (error) throw error;

  return (
    <Box>
      <InfiniteScroll
        dataLength={itemCount}
        next={fetchNextPage}
        hasMore={!!hasNextPage}
        loader={<Spinner />}
      >
        {isLoading ? (
          <MovieGridSkeleton />
        ) : (
          <SimpleGrid
            mt={3}
            columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
            gap={6}
            padding="10px"
          >
            {data?.pages.map((page, pageIndex) => (
              <React.Fragment key={pageIndex}>
                {page.results.map((item, i) => (
                  <MovieGridContainer key={i}>
                    <ItemCard item={item} />
                  </MovieGridContainer>
                ))}
              </React.Fragment>
            ))}
          </SimpleGrid>
        )}
      </InfiniteScroll>
    </Box>
  );
}

export default MediaGrid;
