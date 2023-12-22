import { FC, lazy, Suspense, useEffect } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import CustomSpinner from "components/Customspinner/Customspinner";

const Header = lazy(() => import("components/Header/Header"));

const Sections = lazy(() => import("components/Sections/Sections"));
const MoreInfo = lazy(() => import("components/Moreinfo/Moreinfo"));

const Home: FC = () => {
  return (
    <Suspense fallback={<CustomSpinner />}>
      <Grid templateRows="repeat(1, 1fr)" gap={1}>
        <GridItem w="100%" h="10vh">
          <Header />
        </GridItem>
      </Grid>
      <Sections />
      {/* Modal */}
      <MoreInfo />
    </Suspense>
  );
};

export default Home;
