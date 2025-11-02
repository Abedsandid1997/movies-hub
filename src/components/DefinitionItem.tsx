import { Box, Heading } from "@chakra-ui/react";
import { type ReactNode } from "react";
interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}
const DefinitionItem = ({ term, children }: Props) => {
  return (
    <Box marginY={5}>
      {" "}
      <Heading as="dt" color="red.400" fontSize="large">
        {term}{" "}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default DefinitionItem;
