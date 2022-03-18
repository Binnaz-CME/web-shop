import React, {useEffect} from "react";
import {
  Container,
  Text,
  Heading,
  Button,
  Flex,
  Image,
} from "@chakra-ui/react";
import { cartState } from "../stores/cart/atom";
import { useRecoilValue } from "recoil";
import useCart from "../hooks/useCart";

function Cart() {
  const cartItems = useRecoilValue(cartState);
  const { onAdd, onRemove, saveCart, loadSavedCart } = useCart();

  const totalPrice = cartItems.reduce(
    (total, curr) => total + curr.price * curr.qty,
    0
  );

  return (
    <Container size="md">
      <Heading fontSize="lg" mt="2em" textAlign="center">
        Cart
      </Heading>
      <div>{cartItems.length === 0 && <Text>Cart is empty</Text>}</div>
      {cartItems.map((item) => (
        <Flex key={item.id} alignItems="center" justifyContent="start">
          <Image
            margin="1em"
            maxWidth="2.5em"
            objectFit="fit"
            src={item.image}
          />
          <Text fontSize="xs">{item.title}</Text>
          <Text m="2em">
            {item.qty} x ${item.price}
          </Text>
          <Button size="xs" onClick={() => onAdd(item)}>
            +
          </Button>
          <Button size="xs" m="1" onClick={() => onRemove(item)}>
            -
          </Button>
        </Flex>
      ))}
      <Text fontWeight="bold">Total price: ${totalPrice.toFixed(2)}</Text>
      
    </Container>
  );
}

export default Cart;
