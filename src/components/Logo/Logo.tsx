import React, { FC, CSSProperties } from "react";
import darklogo from "assets/darklogo.png";
import lightlogo from "assets/lightlogo.png";
import { useColorMode } from "@chakra-ui/react";

const Logo: FC = () => {
  const { colorMode } = useColorMode();
  const logo = colorMode === "dark" ? darklogo : lightlogo;

  const imageStyles: CSSProperties = {
    minWidth: "150px",
    height: "auto",
    margin: "1.5vw",
    cursor: "pointer",
    userSelect: "none",
  };

  return (
    <>
      <img src={logo} alt="communities" style={imageStyles} />
    </>
  );
};

export default Logo;
