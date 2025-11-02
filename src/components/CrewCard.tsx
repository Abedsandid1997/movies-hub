import type { Cast, Crew } from "../entities/Credits";
import { Flex, Image, Text } from "@chakra-ui/react";
import { getImageUrl } from "../services/img-url";
interface Props {
  person: Crew | Cast;
}
const CrewCard = ({ person }: Props) => {
  const getRole = (person: Crew | Cast) =>
    (person as Crew).job || (person.gender === 1 ? "Actress" : "Actor");

  return (
    <Flex
      direction="column"
      width="138px"
      align="center"
      gap={2}
      flexShrink={{ base: 0, lg: 1 }}
      height="100%"
    >
      <Text whiteSpace="normal" color="red.400" fontSize="lg">
        {getRole(person)}
      </Text>
      <Image
        src={getImageUrl(person.profile_path)}
        width="138px"
        height="175px"
        borderRadius={10}
        objectFit="fill"
      />{" "}
      <Text whiteSpace="normal">{person.name}</Text>
    </Flex>
  );
};

export default CrewCard;
