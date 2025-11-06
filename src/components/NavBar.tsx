import { Flex, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo2-removebg-preview.png";
import ColorSwitcher from "./ColorSwitcher";
import { Link } from "react-router-dom";
import ChakraLinks from "./ChakraLink";
import SearchForm from "./SearchForm";
import useMediaTypeStore from "../state-managment/type-store";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const MotionImage = motion(Image);
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const setType = useMediaTypeStore((s) => s.setType);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      width="100%"
      flexWrap="wrap"
      px={4}
      py={3}
      boxShadow="sm"
      bg="chakra-body-bg"
      position="sticky"
      top={0}
      zIndex={1000}
    >
      {/* Desktop Nav */}
      <Flex
        display={{ base: "none", md: "flex" }}
        align="center"
        gap={5}
        width="100%"
      >
        <HStack gapX={6} align="center">
          <Link to="/">
            <MotionImage
              src={logo}
              boxSize="70px"
              borderRadius={10}
              // initial={{ y: -30, opacity: 0 }}
              // animate={{ y: [0, -20, 0], opacity: 1 }}
              // transition={{
              //   duration: 0.8,
              //   ease: "easeOut",
              //   times: [0, 0.3, 1],
              // }}
              className="animate-bounce"
            />
          </Link>
          <ChakraLinks to="/movie" changeType={() => setType("movie")}>
            Films
          </ChakraLinks>
          <ChakraLinks to="/tv" changeType={() => setType("tv")}>
            TV-serier
          </ChakraLinks>
        </HStack>

        <Flex flex="1" justify="flex-end" gap={3}>
          <SearchForm />
          <ColorSwitcher />
        </Flex>
      </Flex>

      {/* Mobile Nav */}
      <Flex display={{ base: "flex", md: "none" }} align="center" width="100%">
        <HStack gapX={4} align="center" width="100%">
          <Link to="/">
            <Image src={logo} boxSize="70px" borderRadius={10} />
          </Link>
          <SearchForm />
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </HStack>
      </Flex>

      {/* Mobile Dropdown Menu */}
      <Flex
        direction="column"
        align="center"
        gap={3}
        mt={2}
        width="100%"
        borderRadius="md"
        overflow="hidden"
        transition="all 0.3s ease"
        transform={isOpen ? "translateY(0)" : "translateY(-10px)"}
        opacity={isOpen ? 1 : 0}
        maxHeight={isOpen ? "200px" : "0"}
        display={{ base: "flex", md: "none" }}
        pointerEvents={isOpen ? "auto" : "none"}
      >
        <ChakraLinks to="/movie" changeType={() => setType("movie")}>
          Films
        </ChakraLinks>
        <ChakraLinks to="/tv" changeType={() => setType("tv")}>
          TV-serier
        </ChakraLinks>
        <ColorSwitcher />
      </Flex>
    </Flex>
  );
};

export default NavBar;
