import { Box, Flex, Heading, Skeleton } from "@chakra-ui/react";

const MediaSimilarSkeleton = () => {
  const skeletons = [1, 2, 3, 4, 6, 5, 7, 8, 9, 10];
  return (
    <Box borderTop="2px solid" borderColor="red.500" p={2}>
      <Heading ml={3} mb={2}>
        {" "}
        Similar
      </Heading>
      <Flex
        overflowX="auto"
        gap={5}
        py={4}
        px={2}
        width="100%"
        height="100%"
        align="center"
        justify="flex-start"
      >
        {skeletons.map((skeleton) => (
          <Flex
            key={skeleton}
            direction="column"
            width="180px"
            align="center"
            gap={2}
            flexShrink={0}
            height="100%"
          >
            <Skeleton borderRadius="md" width="180px" height="120px" />

            <Box height="3rem">
              <Skeleton height="1rem" width="7rem" />
            </Box>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default MediaSimilarSkeleton;
