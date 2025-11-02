import React, { useRef } from "react";
import useMediaSimilar from "../hooks/useMediaSimilar";
import { Spinner, Flex, Heading, Box } from "@chakra-ui/react";
import SimilarMediaCard from "./SimilarMediaCard";
import MediaSimilarSkeleton from "./skeletons/MediaSimilarSkeleton";
import { Link } from "react-router-dom";
import useMediaTypeStore from "../state-managment/type-store";

const MediaSimilar = ({ id }: { id: number }) => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useMediaSimilar(id);
  const type = useMediaTypeStore((s) => s.type);

  const scrollRef = useRef<HTMLDivElement | null>(null);

  if (error) throw error;
  if (isLoading) return <MediaSimilarSkeleton />;
  if (data?.pages[0].results.length === 0) return null;
  const handleScroll = () => {
    const div = scrollRef.current;
    if (!div || !hasNextPage || isFetchingNextPage) return;

    const isAtEnd = div.scrollLeft + div.clientWidth >= div.scrollWidth - 50;
    if (isAtEnd) {
      fetchNextPage();
    }
  };

  return (
    <>
      <Box borderTop="1px solid" borderColor="red.500" p={2}>
        <Heading ml={3} mb={2}>
          Similar
        </Heading>
        <Flex
          ref={scrollRef}
          onScroll={handleScroll}
          overflowX="auto"
          gap={5}
          py={4}
          px={2}
          width="100%"
          height="100%"
          align="center"
          justify="flex-start"
        >
          {data?.pages.map((page, i) => (
            <React.Fragment key={i}>
              {page.results.map((media) => (
                <Link to={`/${type}/${media.id}`} key={media.id}>
                  <SimilarMediaCard item={media} />
                </Link>
              ))}
            </React.Fragment>
          ))}

          {isFetchingNextPage && <Spinner />}
        </Flex>
      </Box>
      {/* 
      <Box borderTop="1px solid" borderColor="red.500" p={2} mt={5}>
        <Heading ml={3} mb={2}>
          {" "}
          Similar
        </Heading>
        <Flex
          ref={scrollRef}
          overflowX="auto"
          gap={5}
          py={4}
          px={2}
          width="100%"
          height="100%"
          align="center"
          justify="flex-start"
          direction="column"
        >
          {data?.pages.map((page, i) => (
            <React.Fragment key={i}>
              {page.results.map((media) => (
                <Link to={`/${type}/${media.id}`} key={media.id}>
                  <SimilarMediaCard item={media} />
                </Link>
              ))}
            </React.Fragment>
          ))}

          {isFetchingNextPage && <Spinner />}
        </Flex>
      </Box> */}
    </>
  );
};

export default MediaSimilar;
