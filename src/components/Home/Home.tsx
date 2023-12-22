import { FC, lazy, Suspense } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import CustomSpinner from "components/Customspinner/Customspinner";

const Header = lazy(() => import("components/Header/Header"));

const Sections = lazy(() => import("components/Sections/Sections"));

const Home: FC = () => {
  return (
    <Suspense fallback={<CustomSpinner />}>
      <Grid templateRows="repeat(1, 1fr)" gap={1}>
        <GridItem w="100%" h="10vh">
          <Header />
        </GridItem>
      </Grid>

      <Sections />
    </Suspense>
  );
};

export default Home;
