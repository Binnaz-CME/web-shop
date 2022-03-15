import React from "react";
import { productsState } from "../stores/products/atom";
import { useRecoilValue } from "recoil";
import { Box, Image, Center, Text, Heading,Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Product() {
  const products = useRecoilValue(productsState);

  return (
    <>
      {products.map((product) => (
       <Box bg="GhostWhite" key={product.id} display="flex" alignItems="flex-start">
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
            <Heading fontSize="md">{product.title}</Heading>
            <Text color="gray.500" fontSize="sm">
              {product.description}
            </Text>
            <Text marginTop="1em" fontWeight="bold" fontSize="sm">${product.price}</Text>
          </Link>
        </Box>
      ))}
    </>
  );
}

export default Product;
