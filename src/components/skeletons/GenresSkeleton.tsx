import { Box, Heading, List, HStack, Skeleton } from "@chakra-ui/react";

const GenresSkeleton = () => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <Box>
      <Heading textStyle="2xl" mb="2">
        Genres
      </Heading>
      <List.Root variant="plain">
        {skeletons.map((skeleton) => (
          <List.Item key={skeleton} paddingY="5px">
            <HStack>
              <Skeleton boxSize="32px" borderRadius={10} />
              <Skeleton width="5rem" height="1rem" />
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </Box>
  );
};

export default GenresSkeleton;
