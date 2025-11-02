import type Media from "../entities/Media";
import { Flex, Image, Text, Box } from "@chakra-ui/react";
import { getImageUrl } from "../services/img-url";
interface CardProps {
  item: Media;
}
const SimilarMediaCard = ({ item }: CardProps) => {
  const title = item.title || item.name || "Untitled";
  return (
    <Flex
      direction="column"
      width="180px"
      align="center"
      gap={2}
      flexShrink={0}
      height="100%"
      _hover={{
        transform: "scale(1.03)",
        transition: "transform 0.15s ease-in",
      }}
    >
      <Image
        src={getImageUrl(item.backdrop_path)}
        width="180px"
        height="120px"
        objectFit="fill"
        borderRadius="md"
      />

      <Box height="3rem">
        <Text
          fontSize="sm"
          textAlign="center"
          whiteSpace="normal"
          overflow="hidden"
          fontWeight="bold"
        >
          {title}
        </Text>
      </Box>
    </Flex>
  );
};

export default SimilarMediaCard;
