import React from "react";
import { Helmet } from "react-helmet-async";
import Product from "../components/Product";
import FilteredProducts from "../components/FilteredProducts";
import { useRecoilValue, useRecoilState } from "recoil";
import { filteredProductsState, productsState } from "../stores/products/atom";
import ButtonComp from "../components/ButtonComp";
import {
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  HStack,
} from "@chakra-ui/react";

function Products({ loading, error }) {
  const products = useRecoilValue(productsState);
  const [filteredProducts, setFilteredProducts] = useRecoilState(
    filteredProductsState
  );

  function filterByCategory(category) {
    setFilteredProducts(null);
    const data = products.filter((product) => product.category === category);
    setFilteredProducts(data);
  }

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
        <HStack>
          <ButtonComp
            buttontext="All Products"
            onClick={() => {
              setFilteredProducts(null);
            }}
          />
          <ButtonComp
            buttontext="Electronics"
            onClick={() => {
              filterByCategory("electronics");
            }}
          />
          <ButtonComp
            buttontext="Jewelery"
            onClick={() => {
              filterByCategory("jewelery");
            }}
          />
          <ButtonComp
            buttontext="Men's Clothing"
            onClick={() => {
              filterByCategory("men's clothing");
            }}
          />
          <ButtonComp
            buttontext="Women's Clothing"
            onClick={() => {
              filterByCategory("women's clothing");
            }}
          />
        </HStack>
        <SimpleGrid minChildWidth="180px" gap="1.5em" padding="3em">
          {!filteredProducts ? (
            <Product loading={loading} error={error} />
          ) : (
            <FilteredProducts />
          )}
        </SimpleGrid>
      </Stack>
    </Container>
  );
}

export default Products;
