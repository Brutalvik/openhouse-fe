import { createRoot } from "react-dom/client";
import "./index.css";
import App from "App";

//UI Library
import { ChakraProvider } from "@chakra-ui/react";

const container = document.getElementById("root")!;
const root = createRoot(container as HTMLElement);

root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
