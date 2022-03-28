import React, { useRef } from "react";
import { Box, Image, Center, Text, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function Product() {
  const isComponentMounted = useRef(true);

  const { products, loading, error } = useFetch(
    "https://k4backend.osuka.dev/products",
    isComponentMounted,
    []
  );

  return (
    <>
      {loading ? (
        <div>Loading data...</div>
      ) : (
        products.map((product) => (
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
        ))
      )}
    </>
  );
}

export default Product;
