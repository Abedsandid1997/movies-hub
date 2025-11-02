import { Card, SimpleGrid, Skeleton, SkeletonText } from "@chakra-ui/react";

const MovieGridSkeleton = () => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <SimpleGrid
      mt={3}
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      gap={6}
      padding="10px"
    >
      {skeletons.map((skeleton) => (
        <Card.Root key={skeleton}>
          <Skeleton height="500px" />
          <Card.Body>
            <SkeletonText noOfLines={4} />
          </Card.Body>
        </Card.Root>
      ))}
    </SimpleGrid>
  );
};

export default MovieGridSkeleton;
