import React from "react";
import { Box, Image, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import logo from "../assets/b-akyuz-logo.png";

function Nav() {
  return (
    <Box
      bg="lightGray"
      padding="3"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Image maxWidth="75px" src={logo} />
      <Stack as="nav" direction="row" mr="2em">
        <Link to="/">Products</Link>
        <Link to="/cart">Cart</Link>
      </Stack>
    </Box>
  );
}

export default Nav;
