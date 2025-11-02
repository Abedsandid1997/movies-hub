import { Link } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Props {
  to: string;
  children: ReactNode;
  changeType?: () => void;
}

const ChakraLinks = ({ to, children, changeType }: Props) => {
  return (
    <ChakraLink
      asChild
      fontWeight="medium"
      transition="all 0.3s ease-in-out"
      _hover={{
        transform: "scale(1.1)",
        color: "red.600",
      }}
      whiteSpace="nowrap"
    >
      <Link to={to} onClick={changeType}>
        {children}
      </Link>
    </ChakraLink>
  );
};

export default ChakraLinks;
