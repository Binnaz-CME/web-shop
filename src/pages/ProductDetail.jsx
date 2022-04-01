import React from "react";
import { useParams } from "react-router-dom";
import { productsState } from "../stores/products/atom";
import { useRecoilValue, useRecoilState } from "recoil";
import { Helmet } from "react-helmet-async";
import ButtonComp from "../components/ButtonComp";
import { selectState } from "../stores/select/atom";
import useCart from "../hooks/useCart";
import {
  Box,
  Image,
  Heading,
  Text,
  Flex,
  Container,
  Center,
  Select,
  Spinner,
} from "@chakra-ui/react";

function ProductDetail() {
  const products = useRecoilValue(productsState);
  const [selectValue, setSelectValue] = useRecoilState(selectState);
  const params = useParams();
  const { onAdd } = useCart();

  const product = products.find(
    (product) => product.id === parseInt(params.productId)
  );

  function handleChange(e) {
    const value = e.target.value;
    setSelectValue(parseInt(value));
  }

  if (!product) return <Spinner />;

  return (
    <Container maxWidth="container.md" centerContent>
      <Helmet>
        <title>{product.title}</title>
      </Helmet>
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
            <Text
              marginTop="1em"
              marginBottom="1em"
              fontWeight="bold"
              fontSize="m"
            >
              ${product.price}
            </Text>
            <Center>
              <Select
                onChange={handleChange}
                value={selectValue}
                placeholder="--Select number of items--"
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </Select>
              {/* <Button mt="4" ml="2" onClick={() => onAdd(product)}>
                Add to cart
              </Button> */}
              <ButtonComp
                buttontext="Add to cart"
                margin={0.5}
                onClick={() => onAdd(product)}
              />
            </Center>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
}

export default ProductDetail;
