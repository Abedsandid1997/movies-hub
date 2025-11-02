import { Box, Skeleton } from "@chakra-ui/react";

const MediaVideoSkelteon = () => {
  return (
    <Box
      width="100%"
      height={{ base: "400px", md: "100%" }}
      borderRadius={10}
      overflow="hidden"
    >
      <Skeleton width="100%" height="100%" className="rounded-lg" />
    </Box>
  );
};

export default MediaVideoSkelteon;
