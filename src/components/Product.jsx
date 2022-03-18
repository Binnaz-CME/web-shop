import React from "react";
import { useRecoilValue } from "recoil";
import { Box, Image, Center, Text, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { productsState } from "../stores/products/atom";

function Product() {
  const products = useRecoilValue(productsState);

  return (
    <>
      {products.map((product) => (
        <Box
          boxShadow="base"
          bg="snow"
          key={product.id}
          display="flex"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Link to={`/products/${product.id}`}>
            <Center>
              <Image
                margin="1em"
                maxWidth="10em"
                boxSize="150px"
                objectFit="fit"
                src={product.image}
              />
            </Center>
            <Heading m="0.5em" fontSize="md">
              {product.title}
            </Heading>
            <Text m="0.5em" fontWeight="bold" fontSize="md" color="gray.500">
              ${product.price}
            </Text>
          </Link>
        </Box>
      ))}
    </>
  );
}

export default Product;
