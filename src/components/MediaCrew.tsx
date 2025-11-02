import { Flex, Spinner } from "@chakra-ui/react";
import useMediacredites from "../hooks/useMediacredites";
import CrewCard from "./CrewCard";

const MediaCrew = ({ id }: { id: number }) => {
  const { data, error, isLoading } = useMediacredites(id);
  if (error) throw error;
  if (isLoading) return <Spinner />;
  if (!data) return null;

  const crew = data.crew.filter(
    (c) => c.job === "Writer" || c.job === "Director"
  );

  const cast = [...crew, ...data.cast];

  return (
    <Flex
      direction={{ base: "row", lg: "column" }}
      gap={5}
      py={4}
      px={2}
      width="100%"
      height="100%"
      align="center"
      justify="flex-start"
    >
      {cast.map((c, index) => (
        <CrewCard person={c} key={index} />
      ))}
    </Flex>
  );
};

export default MediaCrew;
