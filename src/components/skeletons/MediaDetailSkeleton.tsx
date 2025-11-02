import { Box, Grid, GridItem, Skeleton } from "@chakra-ui/react";
import MediaVideoSkelteon from "./MediaVideoSkelteon";
import MediaSimilarSkeleton from "./MediaSimilarSkeleton";

const MediaDetailSkeleton = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main1" "main2" "footer"`,
        md: ` "main1 main2" "footer footer" `,
      }}
      templateColumns={{ base: "1fr", md: "1fr 1fr" }}
      gap={5}
    >
      <GridItem area="main1">
        <Box
          position="relative"
          width="full"
          borderRadius={10}
          overflow="hidden"
        >
          <Skeleton width="100%" height="500px" />
        </Box>
      </GridItem>
      <GridItem area="main2">
        <MediaVideoSkelteon />
      </GridItem>
      <GridItem area="footer" height="100%" overflowX="auto">
        <MediaSimilarSkeleton />
      </GridItem>
    </Grid>
  );
};

export default MediaDetailSkeleton;
