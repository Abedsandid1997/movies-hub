import { Box } from "@chakra-ui/react";
import { type ReactNode } from "react";

const MovieGridContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15s ease-out",
      }}
      borderRadius="15px"
      overflow={"hidden"}
    >
      {children}
    </Box>
  );
};

export default MovieGridContainer;
