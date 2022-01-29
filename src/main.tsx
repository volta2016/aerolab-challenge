import React from "react";
import ReactDOM from "react-dom";
import {ChakraProvider} from "@chakra-ui/react";

import Layout from "~/app/layout";

/*import App from "./App";*/
import theme from "./theme";

import "./theme.css";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Layout>
        <span>todo ok</span>
      </Layout>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
