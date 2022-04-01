import React from "react";
import {
  Heading,
  HStack,
  Text,
  Box,
  Center,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { authState } from "../stores/auth/atom";
import AdminNav from "../components/AdminNav";
import ButtonComp from "../components/ButtonComp";
import { useRecoilValue } from "recoil";
import { productsState } from "../stores/products/atom";

function adminPage() {
  const token = useRecoilValue(authState);
  const products = useRecoilValue(productsState);

  if(!token) return <div>Please login</div>

  return (
    <main>
      <AdminNav />
      <SimpleGrid minChildWidth="180px" gap="1.5em" padding="3em">
        {products.map((product) => (
          <Box
            boxShadow="base"
            bg="snow"
            key={product.id}
            display="flex"
            alignItems="flex-end"
            justifyContent="center"
            flexWrap="wrap"
          >
            <Link to={`/products/${product.id}`}>
              <Center>
                <Image
                  margin="1em"
                  maxWidth="10em"
                  boxSize="80px"
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
            <HStack justifyContent="flex-end">
              <ButtonComp buttontext="Delete" margin={0.5} size="xs" />
              <ButtonComp buttontext="Edit" margin={0.5} size="xs" />
            </HStack>
          </Box>
        ))}
      </SimpleGrid>
    </main>
  );
}

export default adminPage;