import { FC, CSSProperties } from "react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

import { useColorMode } from "@chakra-ui/react";

const Header: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const styles: CSSProperties = {
    margin: "2vw",
    cursor: "pointer",
  };

  return (
    <div style={styles}>
      {colorMode === "light" ? (
        <MoonIcon w={8} h={8} onClick={toggleColorMode} />
      ) : (
        <SunIcon w={8} h={8} onClick={toggleColorMode} />
      )}
    </div>
  );
};

export default Header;
