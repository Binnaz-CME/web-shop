import React from "react";
import { useParams } from "react-router-dom";
import { productsState } from "../stores/products/atom";
import { useRecoilValue } from "recoil";
import {
  Box,
  Image,
  Heading,
  Text,
  Button,
  Flex,
  Container,
} from "@chakra-ui/react";

import useCart from "../hooks/useCart";

function ProductDetail() {
  const products = useRecoilValue(productsState);
  const params = useParams();

  const product = products.find(
    (product) => product.id === parseInt(params.productId)
  );

  const { onAdd } = useCart();

  return (
    <Container maxWidth="container.lg">
      <Box maxW="40rem">
        <Flex alignItems="center">
          <Image
            margin="1em"
            maxWidth="20em"
            objectFit="fit"
            src={product.image}
          />

          <Box flex="1">
            <Heading fontSize="md">{product.title}</Heading>
            <Text color="gray.500" fontSize="sm">
              {product.description}
            </Text>
            <Text marginTop="1em" fontWeight="bold" fontSize="sm">
              {product.price}$
            </Text>
            <Button m="1em" onClick={() => onAdd(product)}>
              Add to cart
            </Button>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
}

export default ProductDetail;
