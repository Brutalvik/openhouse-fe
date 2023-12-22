import { FC, lazy, Suspense, useEffect } from "react";
import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import CustomSpinner from "components/Customspinner/Customspinner";

const Header = lazy(() => import("components/Header/Header"));
const Content = lazy(() => import("components/Content/Content"));

const Home: FC = () => {
  const columnCount = useBreakpointValue({
    base: 1,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 5,
  });
  return (
    <Suspense fallback={<CustomSpinner />}>
      <Grid templateRows="repeat(1, 1fr)" gap={1}>
        <GridItem w="100%" h="10vh">
          <Header />
        </GridItem>
      </Grid>
      <Grid templateColumns={`repeat(${columnCount}, 1fr)`} gap={6}>
        <Content />
      </Grid>
    </Suspense>
  );
};

export default Home;
