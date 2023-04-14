import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme, defineStyleConfig } from "@chakra-ui/react";

import AppRoutes from "../routes";
import store from "./store";

function App() {
  const baseStyle = {
    maxW : "1450px"
  };
  const theme = extendTheme({
    components: {
      Container: defineStyleConfig({ baseStyle }),
    },
  });
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <AppRoutes />
      </ChakraProvider>
    </Provider>
  );
}

export default App;
