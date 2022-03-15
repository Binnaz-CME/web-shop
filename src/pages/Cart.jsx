import React from "react";
import { Container, Text, Heading, Button, Box } from "@chakra-ui/react";
import { cartState } from "../stores/cart/atom";
import { useRecoilState } from "recoil";

function Cart() {
  const [cartItems, setCartItems] = useRecoilState(cartState);
  
  return (
    <Container>
      <Heading>Cart items</Heading>
      <div>{cartItems.length === 0 && <div>Cart is empty</div>}</div>
      {cartItems.map((item) => (
        <Box key={item.id}>
          <Text>{item.title}</Text>
          <Button onClick={() => onAdd(item)}>+</Button>
          <Button>-</Button>
          <Text>
            {item.qty} x ${item.price.toFixed(2)}
          </Text>
        </Box>
      ))}
    </Container>
  );
}

export default Cart;
