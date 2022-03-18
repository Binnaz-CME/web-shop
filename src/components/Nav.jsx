import React from "react";
import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import logo from "../assets/b-akyuz-logo.png";

function Nav() {
  return (
    <Box
      bg="peachpuff"
      padding="3"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Image maxWidth="65px" src={logo} />
      <Stack as="nav" direction="row" mr="1.5em">
        <Text fontSize="lg" mr="1.5em">
          <Link to="/">Products</Link>
        </Text>
        <Text fontSize="lg">
          <Link to="/cart">Cart</Link>
        </Text>
      </Stack>
    </Box>
  );
}

export default Nav;
