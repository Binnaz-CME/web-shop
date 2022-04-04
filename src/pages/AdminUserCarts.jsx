import React, { useState, useEffect } from "react";
import AdminNav from "../components/AdminNav";
import useFetch from "../hooks/useFetch";
import { nanoid } from "nanoid";
import { useRecoilValue } from "recoil";
import { productsState } from "../stores/products/atom";
import { authState } from "../stores/auth/atom";
import { Helmet } from "react-helmet-async";
import {
  Heading,
  VStack,
  UnorderedList,
  ListItem,
  Flex,
  Spinner,
  HStack,
  StackDivider,
} from "@chakra-ui/react";

function AdminUserCarts() {
  const { fetchData, loading } = useFetch();
  const [userCarts, setUserCarts] = useState([]);
  const products = useRecoilValue(productsState);
  const token = useRecoilValue(authState);

  if (!token) return <Heading>Please login</Heading>;

  useEffect(() => {
    async function getUserCarts() {
      const cartsData = await fetchData({
        method: "get",
        url: "https://k4backend.osuka.dev/carts",
      });
      setUserCarts(cartsData);
    }
    getUserCarts();
  }, []);

  if (loading || userCarts.length === 0 || products.length === 0)
    return <Spinner />;

  return (
    <div>
      <AdminNav />
      <Helmet>
        <title>Admin - Carts</title>
      </Helmet>
      <Flex justifyContent="center" alignItems="flex-start">
        <VStack alignItems="flex-start">
          <Heading>User carts</Heading>
          <UnorderedList>
            {userCarts.map(({ userId, products: cartProducts }) => (
              <HStack
                key={nanoid()}
                m="3"
                divider={<StackDivider borderColor="gray.200" />}
              >
                <ListItem listStyleType="none">userId: {userId}</ListItem>
                {cartProducts.map((cartProduct) => {
                  const item = products.find(
                    (product) => product.id === cartProduct.productId
                  );
                  return (
                    <ListItem key={nanoid()} listStyleType="none">
                      {item.title}
                    </ListItem>
                  );
                })}
              </HStack>
            ))}
          </UnorderedList>
        </VStack>
      </Flex>
    </div>
  );
}

export default AdminUserCarts;
