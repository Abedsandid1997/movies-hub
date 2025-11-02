import type Media from "../entities/Media";
import { SimpleGrid, Text } from "@chakra-ui/react";
import DefinitionItem from "./DefinitionItem";
import VoteBadge from "./VoteBadge";

const ItemsDetails = ({ media }: { media: Media }) => {
  const releaseDate = media.release_date || media.first_air_date;

  return (
    <SimpleGrid columns={2} as="dl">
      <DefinitionItem term="Vote Avrage">
        <VoteBadge vote={media.vote_average} />
      </DefinitionItem>
      <DefinitionItem term="Release date">
        <Text>{releaseDate}</Text>
      </DefinitionItem>
      <DefinitionItem term="Genres">
        {media.genres?.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Status">{media.status}</DefinitionItem>
    </SimpleGrid>
  );
};

export default ItemsDetails;
