import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

// TODO: answer here

const AnswerHere = () => (
  <ChakraProvider>
    <App />
  </ChakraProvider> // TODO: replace this
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AnswerHere />
    </BrowserRouter>
  </React.StrictMode>
);
