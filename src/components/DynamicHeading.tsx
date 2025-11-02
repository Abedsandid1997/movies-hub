import useMovieQueryStore from "../state-managment/movie-store";
import { Heading } from "@chakra-ui/react";
import useMediaTypeStore from "../state-managment/type-store";

const DynamicHeading = () => {
  const searchText = useMovieQueryStore((s) => s.movieQuery.searchText);
  const type = useMediaTypeStore((s) => s.type);
  return (
    <Heading fontSize="2xl">
      {searchText ? `${searchText} ${types[type]}` : types[type]}
    </Heading>
  );
};

export default DynamicHeading;
const types = {
  movie: "Movies",
  tv: "TV Showes",
};
