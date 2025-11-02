import { Card, Flex, Image, Text } from "@chakra-ui/react";
import VoteBadge from "./VoteBadge";
import { getImageUrl } from "../services/img-url";
import type Media from "../entities/Media";
import useMediaTypeStore from "../state-managment/type-store";
import { Link } from "react-router-dom";

const ItemCard = ({ item }: { item: Media }) => {
  const title = item.title || item.name || "Untitled";
  const releaseDate = item.release_date || item.first_air_date;
  const type = useMediaTypeStore((s) => s.type);
  return (
    <Card.Root>
      <Image
        src={getImageUrl(item.poster_path)}
        alt="Green double couch with wooden legs"
        height="500px"
        objectFit="fill"
      />
      <Text
        as="span"
        fontSize="2xl"
        position="absolute"
        top="2"
        right="2"
        zIndex="1"
        bg="blackAlpha.700"
        color="white"
        borderRadius="full"
        px="2"
        py="1"
      >
        {item.adult ? "🔞" : "🟢"}
      </Text>
      <Card.Body gap="2">
        <Flex
          marginBottom="3"
          justify="space-between"
          alignItems="baseline"
          fontWeight="medium"
          whiteSpace="normal"
        >
          <Card.Title textStyle="2xl">
            <Link to={`/${type}/${item.id}`}>{title}</Link>
          </Card.Title>
          <VoteBadge vote={item.vote_average} />
        </Flex>
        <Text>Popularity: {Math.round(item.popularity)}</Text>

        <Text fontSize="sm" color="gray.400">
          Released: {new Date(releaseDate!).toLocaleDateString()}
        </Text>
      </Card.Body>
    </Card.Root>
  );
};

export default ItemCard;
