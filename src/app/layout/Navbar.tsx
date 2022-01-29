import React from "react";
import {Text, Box, Container, Stack, Image} from "@chakra-ui/react";

import logo from "~/assets/logo.svg";

const Navbar: React.FC = () => {
  return (
    <Box backgroundColor="white" boxShadow="md">
      <Container maxWidth="6xl">
        <Stack alignItems="center" as="nav" direction="row" justifyContent="space-between">
          <Image height={8} src={logo} width={8} />
        </Stack>
        <Stack alingItems="center" color="gray.500" direction="row" spancing={3}>
          <Text>John Kite</Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
