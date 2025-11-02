import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { LuSearch } from "react-icons/lu";
import useMovieQueryStore from "../state-managment/movie-store";
import { useNavigate } from "react-router-dom";
import useMediaTypeStore from "../state-managment/type-store";

const SearchForm = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useMovieQueryStore((s) => s.setSearchText);
  const searchText = useMovieQueryStore((s) => s.movieQuery.searchText);
  const navigate = useNavigate();
  const type = useMediaTypeStore((s) => s.type);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) {
          setSearchText(ref.current.value);
          navigate(`/${type}`);
        }
      }}
    >
      <InputGroup flex="1" startElement={<LuSearch />}>
        <Input
          ref={ref}
          placeholder="Search movie"
          defaultValue={searchText ? searchText : ""}
          borderRadius={20}
        />
      </InputGroup>
    </form>
  );
};

export default SearchForm;
