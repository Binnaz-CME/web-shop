import React from "react";
import { Container, Text, Heading, Button, Box } from "@chakra-ui/react";
import { cartState } from "../stores/cart/atom";
import { useRecoilState } from "recoil";
import useCart from "../hooks/useCart";

function Cart() {
  const [cartItems, setCartItems] = useRecoilState(cartState);

  const { onAdd } = useCart();

  return (
    <Container>
      <Heading>Cart items</Heading>
      <div>{cartItems.length === 0 && <Text>Cart is empty</Text>}</div>
      {cartItems.map((item) => (
        <Box key={item.id}>
          <Text>{item.title}</Text>
          <Button onClick={() => onAdd(item)}>+</Button>
          <Button onClick={() => onRemove(item)}>-</Button>
          <Text>
            {item.qty} x ${item.price.toFixed(2)}
          </Text>
        </Box>
      ))}
    </Container>
  );
}

export default Cart;
