import React from "react";
import { useParams } from "react-router-dom";
import { productsState } from "../stores/products/atom";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  Box,
  Image,
  Heading,
  Text,
  Button,
  Flex,
  Container,
  Center,
  Select,
} from "@chakra-ui/react";

import useCart from "../hooks/useCart";
import { selectState } from "../stores/select/atom";

function ProductDetail() {
  const products = useRecoilValue(productsState);
  const [selectValue, setSelectValue] = useRecoilState(selectState)
  const params = useParams();

  const product = products.find(
    (product) => product.id === parseInt(params.productId)
  );

  const { onAdd } = useCart();

  function handleChange(e) {
    const value = e.target.value   
    console.log(value)
    setSelectValue(parseInt(value))
    console.log(selectValue)
  }

  return (
    <Container maxWidth="container.md" centerContent>
      <Box maxW="30rem">
        <Flex alignItems="center" flexDirection="column">
          <Image
            margin="2em"
            maxWidth="15em"
            objectFit="fit"
            src={product.image}
          />

          <Box ml="3">
            <Heading marginBottom="2" fontSize="md">
              {product.title}
            </Heading>
            <Text color="gray.500" fontSize="sm">
              {product.description}
            </Text>
            <Text marginTop="1em" fontWeight="bold" fontSize="m">
              ${product.price}
            </Text>
            <Center>
              <Button mt="4" onClick={() => onAdd(product)}>
                <Select autoFocus onChange={handleChange} value={selectValue} placeholder="--Select number of items--">
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                </Select>
                Add to cart
              </Button>
            </Center>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
}

export default ProductDetail;
