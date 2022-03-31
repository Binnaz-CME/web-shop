import React, { useEffect } from "react";
import { Box, Image, Center, Text, Heading, Spinner } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import getProducts from "../api/api.js";

function Product() {
  const { products, loading, error } = useFetch(
    "https://k4backend.osuka.dev/products"
  );

  if (error)
    return (
      <Heading color="red">
        Something went wrong while getting products... Please Try again
      </Heading>
    );

  return (
    <>
      {loading ? (
        <Spinner
          size="xl"
          thickness="5px"
          speed="0.65s"
          emptyColor="gray.200"
          color="black"
        />
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
