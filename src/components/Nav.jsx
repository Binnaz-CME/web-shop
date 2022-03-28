import React, { useEffect } from "react";
import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useRecoilValue, useRecoilState } from "recoil";

import logo from "../assets/b-akyuz-logo.png";
import cart from "../assets/cart.png";

import { cartState } from "../stores/cart/atom";
import { totalCartItems } from "../stores/totalItems/atom";

function Nav() {
  const cartItems = useRecoilValue(cartState);
  const [totalItems, setTotalItems] = useRecoilState(totalCartItems);

  useEffect(() => {
    if (cartItems === null) return;
    const total = cartItems.reduce((total, curr) => total + curr.qty, 0);
    setTotalItems(total);
  }, [cartItems]);

  return (
    <Box
      bg="peachpuff"
      padding="3"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Image maxWidth="65px" src={logo} />
      <Stack
        fontSize="lg"
        as="nav"
        direction="row"
        alignItems="center"
        mr="1em"
      >
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/login">Login</Link>
        <Link to="/cart">
          <img src={cart} width="50px" />
        </Link>
        <Link to="/cart">
          <Text>({totalItems})</Text>
        </Link>
      </Stack>
    </Box>
  );
}
export default Nav;
