import React from "react";
import { Container, Heading, Text, Stack, SimpleGrid } from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";
import Product from "../components/Product";

function Products({ loading, error }) {
  return (
    <Container maxWidth="container.lg">
      <Helmet>
        <title>Products</title>
      </Helmet>
      <Stack alignItems="center">
        <Heading m="1em">My webshop</Heading>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus, qui ipsam? Praesentium nulla neque quibusdam non animi
          quia! Voluptatibus inventore quod saepe iusto molestias veritatis quos
          aspernatur eum minus eligendi?
        </Text>
        <SimpleGrid minChildWidth="180px" gap="1.5em" padding="3em">
          <Product loading={loading} error={error} />
        </SimpleGrid>
      </Stack>
    </Container>
  );
}

export default Products;
