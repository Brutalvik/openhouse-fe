import { FC, lazy, Suspense } from "react";
import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import CustomSpinner from "components/Customspinner/Customspinner";

const Header = lazy(() => import("components/Header/Header"));
const Content = lazy(() => import("components/Content/Content"));

const Home: FC = () => {
  const columnCount = useBreakpointValue({
    sm: 1,
    md: 3,
    lg: 4,
    xl: 5,
  });

  const margins = useBreakpointValue({
    base: { marginLeft: 2, marginRight: 2, marginBottom: 2 },
    sm: { marginLeft: 12, marginRight: 12, marginBottom: 12 },
    md: { marginLeft: 6, marginRight: 6, marginBottom: 6 },
    lg: { marginLeft: 8, marginRight: 8, marginBottom: 8 },
    xl: { marginLeft: 10, marginRight: 10, marginBottom: 10 },
  });

  return (
    <Suspense fallback={<CustomSpinner />}>
      <Grid templateRows="repeat(1, 1fr)" gap={1}>
        <GridItem w="100%" h="10vh">
          <Header />
        </GridItem>
      </Grid>
      <Grid
        templateColumns={`repeat(${columnCount}, 1fr)`}
        gap={6}
        {...margins}
      >
        <Content />
      </Grid>
    </Suspense>
  );
};

export default Home;
