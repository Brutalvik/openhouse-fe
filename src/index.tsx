import { createRoot } from "react-dom/client";
import "index.css";
import App from "App";
import { Provider } from "react-redux";
import { store, persistor } from "app/store";
import { PersistGate } from "redux-persist/integration/react";

//UI Library
import { ChakraProvider } from "@chakra-ui/react";

const container = document.getElementById("root")!;
const root = createRoot(container as HTMLElement);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </PersistGate>
  </Provider>
);
