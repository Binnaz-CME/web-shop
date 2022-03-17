import React from "react";
import { Container, Heading, Text, Stack, SimpleGrid } from "@chakra-ui/react";

import Product from "../components/Product";

function Products() {
  return (
    <Container maxWidth="container.lg">
      <Stack alignItems="center">
        <Heading m="1em">My webshop</Heading>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus, qui ipsam? Praesentium nulla neque quibusdam non animi
          quia! Voluptatibus inventore quod saepe iusto molestias veritatis quos
          aspernatur eum minus eligendi?
        </Text>
        <SimpleGrid minChildWidth="200px" gap="2em" padding="3em">
          <Product />
        </SimpleGrid>
      </Stack>
    </Container>
  );
}

export default Products;
