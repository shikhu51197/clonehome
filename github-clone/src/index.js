import { ColorModeScript } from "@chakra-ui/color-mode";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from 'react-router-dom';
import theme from "./Component/theme";

ReactDOM.render(
  
    <ChakraProvider theme={theme}>
       <BrowserRouter>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
      </BrowserRouter>
    </ChakraProvider>,
  document.getElementById("root")
)
