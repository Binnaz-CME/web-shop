import React from "react";
import { useParams } from "react-router-dom";
import { productsState } from "../stores/products/atom";
import { useRecoilValue } from "recoil";
import { Box, Center, Image, Heading, Text, Button } from "@chakra-ui/react";
import { cartState } from "../stores/cart/atom";
import { useRecoilState } from "recoil";

function ProductDetail() {
  const products = useRecoilValue(productsState);
  const params = useParams();
  const [cartItems, setCartItems] = useRecoilState(cartState);
  console.log(cartItems);

  const product = products.find(
    (product) => product.id === parseInt(params.productId)
  );

  function onAdd() {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  }

  return (
    <Box>
      <Center>
        <Image
          margin="1em"
          maxWidth="10em"
          boxSize="150px"
          objectFit="fit"
          src={product.image}
        />
      </Center>
      <Heading fontSize="md">{product.title}</Heading>
      <Text color="gray.500" fontSize="sm">
        {product.description}
      </Text>
      <Text marginTop="1em" fontWeight="bold" fontSize="sm">
        {product.price}$
      </Text>
      <Button onClick={() => onAdd(product)}>Add to cart</Button>
    </Box>
  );
}

export default ProductDetail;
