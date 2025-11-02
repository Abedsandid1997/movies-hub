import { Box } from "@chakra-ui/react";
import useVideos from "../hooks/useVideos";
import MediaVideoSkelteon from "./skeletons/MediaVideoSkelteon";

const MediaVideo = ({ id }: { id: number }) => {
  const { data, error, isLoading } = useVideos(id);
  if (error) throw error;
  if (isLoading) return <MediaVideoSkelteon />;
  const first = data?.results[0];
  return first ? (
    <Box
      width="100%"
      height={{ base: "400px", lg: "100%" }}
      borderRadius={10}
      overflow="hidden"
    >
      <iframe
        width="100%"
        height="100%"
        src={`https://www.${first.site}.com/embed/${first.key}`}
        title={first.name}
        allowFullScreen
      />
    </Box>
  ) : null;
};

export default MediaVideo;
