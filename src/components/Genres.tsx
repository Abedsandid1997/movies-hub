import {
  Box,
  Heading,
  List,
  Text,
  Link,
  HStack,
  Image,
} from "@chakra-ui/react";
import useMovieQueryStore from "../state-managment/movie-store";
import genresImages from "../data/genresImages";
import useGenres from "../hooks/useGenres";
import GenresSkeleton from "./skeletons/GenresSkeleton";

const Genres = () => {
  const { data: genres, error, isLoading } = useGenres();
  const genreId = useMovieQueryStore((s) => s.movieQuery.genreId);
  const setGenreId = useMovieQueryStore((s) => s.setGenreId);
  const searchText = useMovieQueryStore((s) => s.setSearchText);
  if (error) throw error;
  if (isLoading) return <GenresSkeleton />;
  return (
    <Box>
      <Heading textStyle="2xl" mb="2">
        Genres
      </Heading>
      <List.Root variant="plain">
        <List.Item paddingY="5px">
          {" "}
          <HStack>
            <Image
              src={`https://image.tmdb.org/t/p/w185/9PXZIUsSDh4alB80jheWX4fhZmy.jpg`}
              boxSize="32px"
              borderRadius={10}
              objectFit="cover"
            />
            <Text
              as={Link}
              paddingLeft={0}
              ml={2}
              fontSize="lg"
              whiteSpace="normal"
              textAlign="left"
              onClick={() => searchText("")}
              fontWeight={!genreId ? "bold" : "normal"}
            >
              All
            </Text>
          </HStack>
        </List.Item>
        {genres?.genres.map((genre, index) => (
          <List.Item key={genre.id} paddingY="5px">
            <HStack>
              <Image
                src={`https://image.tmdb.org/t/p/w185${genresImages[index]}`}
                boxSize="32px"
                borderRadius={10}
                objectFit="cover"
              />
              <Text
                as={Link}
                paddingLeft={0}
                ml={2}
                fontSize="lg"
                whiteSpace="normal"
                textAlign="left"
                onClick={() => setGenreId(genre.id)}
                fontWeight={genreId === genre.id ? "bold" : "normal"}
              >
                {genre.name}
              </Text>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </Box>
  );
};

export default Genres;
