import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, Box, Container } from "@chakra-ui/react";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <Box w="100vw" h="100%" minH="100vh" bgGradient="linear(to-l, #7928CA, #FF0080)">
      <Container>
        <App />
      </Container>
    </Box>
  </ChakraProvider>
);