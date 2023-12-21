import { FC, lazy, Suspense } from "react";
import CustomSpinner from "components/Customspinner/Customspinner";
import { Grid, GridItem } from "@chakra-ui/react";

const Header = lazy(() => import("components/Header/Header"));
const Logo = lazy(() => import("components/Logo/Logo"));

const Home: FC = () => {
  return (
    <Grid templateColumns="repeat(12, 1fr)" gap={6}>
      <Suspense fallback={<CustomSpinner />}>
        <GridItem colStart={1} w="100%" h="10">
          <Logo />
        </GridItem>
        <GridItem colStart={12} w="100%" h="10">
          <Header />
        </GridItem>
      </Suspense>
    </Grid>
  );
};

export default Home;
