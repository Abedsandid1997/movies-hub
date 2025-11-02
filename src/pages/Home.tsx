import { Flex, Grid, GridItem, HStack } from "@chakra-ui/react";
import Genres from "../components/Genres";
import { Outlet } from "react-router-dom";
import DynamicHeading from "../components/DynamicHeading";
import AgeFilter from "../components/AgeFilter";
import OrderBySelector from "../components/OrderBySelector";

const Home = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: ` "aside main" `,
      }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem
        area="aside"
        display={{ base: "none", lg: "block" }}
        paddingX={5}
      >
        <Genres />
      </GridItem>
      <GridItem area="main">
        <Flex ml={3} direction="column" gapY={3}>
          <DynamicHeading />
          <HStack gapX={3}>
            <OrderBySelector />
            <AgeFilter />
          </HStack>
        </Flex>
        <Outlet />
      </GridItem>
    </Grid>
  );
};

export default Home;
