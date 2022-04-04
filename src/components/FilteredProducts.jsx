import { Box, Link, Center, Image, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useRecoilValue } from "recoil";
import { filteredProductsState } from "../stores/products/atom";

function FilteredProducts() {
  const filteredProducts = useRecoilValue(filteredProductsState);

  return (
    <div>
      {filteredProducts.map((product) => (
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
    </div>
  );
}

export default FilteredProducts;
