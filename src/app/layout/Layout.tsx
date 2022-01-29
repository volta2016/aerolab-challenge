import React from "react";
import {Center, Container, Flex} from "@chakra-ui/react";

import Navbar from "./Navbar";

const Layout: React.FC = ({children}) => {
  return (
    <Flex backgroundColor="gray.100" direction="column" flex={1}>
      <Navbar />
      <Center paddingY={6}>
        <Container maxWidth="6xl">{children}</Container>
      </Center>
    </Flex>
  );
};

export default Layout;
