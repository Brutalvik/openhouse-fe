import { FC, CSSProperties, Suspense, lazy } from "react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import CustomSpinner from "components/Customspinner/Customspinner";
import { Grid, GridItem } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";

const Logo = lazy(() => import("components/Logo/Logo"));

const Header: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const styles: CSSProperties = {
    margin: "2vw",
    cursor: "pointer",
  };

  return (
    <Suspense fallback={<CustomSpinner />}>
      <Grid templateColumns="repeat(12, 1fr)" gap={6}>
        <GridItem colStart={1} w="100%" h="10">
          <Logo />
        </GridItem>
        <GridItem colStart={12} w="100%" h="10">
          <div style={styles}>
            {colorMode === "light" ? (
              <MoonIcon w={8} h={8} onClick={toggleColorMode} />
            ) : (
              <SunIcon w={8} h={8} onClick={toggleColorMode} />
            )}
          </div>
        </GridItem>
      </Grid>
    </Suspense>
  );
};

export default Header;
