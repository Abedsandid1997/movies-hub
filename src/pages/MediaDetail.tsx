import { useParams } from "react-router-dom";
import useMediaDeatils from "../hooks/useMediaDetails";
import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { getImageUrl } from "../services/img-url";
import ItemsDetails from "../components/ItemsDetails";
import MediaVideo from "../components/MediaVideo";
import MediaSimilar from "../components/MediaSimilar";
import MediaDetailSkeleton from "../components/skeletons/MediaDetailSkeleton";
import MediaCrew from "../components/MediaCrew";

const MediaDetail = () => {
  const { media, id } = useParams();
  const { data, error, isLoading } = useMediaDeatils(media!, parseInt(id!));
  const title = data?.title || data?.name || "Untitled";
  if (error) throw error;
  if (isLoading) return <MediaDetailSkeleton />;
  return (
    <Grid
      templateAreas={{
        base: `"main1" "main2" "aside" "footer"`,
        lg: ` "aside main1 main2" "footer footer footer" `,
      }}
      templateColumns={{ base: "1fr", lg: "200px 1fr 1fr" }}
      gap={5}
    >
      {/* Aside Section */}
      <GridItem
        area="aside"
        overflow="auto"
        borderColor="red.500"
        borderStyle="solid"
        borderTopWidth={{ base: "1px", lg: "0" }}
        maxHeight="70vh"
        css={{
          lg: {
            direction: "rtl",
            "& > *": {
              direction: "ltr",
            },
          },
        }}
      >
        <MediaCrew id={data!.id} />
      </GridItem>
      {/* Media Details Section */}
      <GridItem area="main1">
        <Box
          position="relative"
          width="full"
          height="full"
          borderRadius={10}
          overflow="hidden"
        >
          <Box
            position="absolute"
            inset={0}
            bgImage={`url(${getImageUrl(data!.backdrop_path)})`}
            bgSize="cover"
            bgPos="center"
            filter="brightness(20%)"
          />

          <Box position="relative" zIndex={1} p={8} color="white">
            <Heading fontSize="2xl" mb={4}>
              {title}
            </Heading>
            <Text fontSize="md" mb={6}>
              {data?.overview}
            </Text>
            <ItemsDetails media={data!} />
          </Box>
        </Box>
      </GridItem>
      {/* Media trailer section */}
      <GridItem area="main2">
        <MediaVideo id={data!.id} />
      </GridItem>
      {/* Similar movies Section */}
      <GridItem area="footer" height="100%" overflowX="auto">
        <MediaSimilar id={data!.id} />
      </GridItem>
    </Grid>
  );
};

export default MediaDetail;
