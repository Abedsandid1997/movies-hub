import { Flex, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo2-removebg-preview.png";
import ColorSwitcher from "./ColorSwitcher";
import { Link } from "react-router-dom";
import ChakraLinks from "./ChakraLink";
import SearchForm from "./SearchForm";
import useMediaTypeStore from "../state-managment/type-store";
const NavBar = () => {
  const setType = useMediaTypeStore((s) => s.setType);

  return (
    <Flex
      as="nav"
      align="center"
      gap={3}
      direction={{ base: "column", sm: "row" }}
      width="100%"
    >
      <HStack gapX={6} align="center" mr={6}>
        <Link to="/">
          <Image src={logo} boxSize="80px" borderRadius={10} />
        </Link>
        <ChakraLinks to="/movie" changeType={() => setType("movie")}>
          Films
        </ChakraLinks>

        <ChakraLinks to="/tv" changeType={() => setType("tv")}>
          TV-serier
        </ChakraLinks>
      </HStack>
      <Flex flex="1" gap={3}>
        <SearchForm />
        <ColorSwitcher />
      </Flex>
    </Flex>
  );
};

export default NavBar;
