import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue, useRecoilState } from "recoil";
import logo from "../assets/b-akyuz-logo.png";
import cart from "../assets/cart.png";
import { cartState } from "../stores/cart/atom";
import { totalCartItems } from "../stores/totalItems/atom";
import { Box, Image, Text, HStack } from "@chakra-ui/react";
import { authState } from "../stores/auth/atom";
import ButtonComp from "./ButtonComp";
import { useNavigate } from "react-router";

function Nav() {
  const cartItems = useRecoilValue(cartState);
  const [totalItems, setTotalItems] = useRecoilState(totalCartItems);
  const [token, setToken] = useRecoilState(authState);
  const navigate = useNavigate();

  useEffect(() => {
    if (cartItems === null) return;
    const total = cartItems.reduce((total, curr) => total + curr.qty, 0);
    setTotalItems(total);
  }, [cartItems]);

  function handleLogout() {
    navigate("/");
    setToken("");
  }

  return (
    <Box
      bg="#f7e6d4"
      padding="3"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Image maxWidth="65px" src={logo} />
      <HStack
        fontSize="lg"
        as="nav"
        direction="row"
        alignItems="center"
        mr="1em"
      >
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        {!token ? (
          <Link to="/login">Login</Link>
        ) : (
          <Link to="/profile">Profile</Link>
        )}
        <Link to="/cart">
          <img src={cart} width="50px" />
        </Link>
        <Text as={Link} to="/cart">
          ({totalItems})
        </Text>
        {token ? (
          <ButtonComp buttontext="Logout" onClick={handleLogout} />
        ) : null}
      </HStack>
    </Box>
  );
}
export default Nav;
