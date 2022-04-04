import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { userState, authState } from "../stores/auth/atom";
import useFetch from "../hooks/useFetch";
import { Helmet } from "react-helmet-async";
import { Heading, Stack, Spinner, Flex, Text, Box } from "@chakra-ui/react";
import AdminNav from "../components/AdminNav";

function ProfilePage() {
  const [user, setUser] = useRecoilState(userState);
  const { fetchData } = useFetch();
  const token = useRecoilValue(authState);

  if (!token) return <Heading>Please login</Heading>;

  useEffect(() => {
    async function getUser() {
      const userData = await fetchData({
        method: "get",
        url: `https://k4backend.osuka.dev/users/${token.userId}`,
      });
      setUser(userData);
    }
    getUser();
  }, []);

  if (!user) {
    return <Spinner />;
  }

  return (
    <div>
      {user.role === 'admin' ? <AdminNav /> : null}
      <Flex minH={"100vh"} align={"center"} justify={"center"} bg={"snow"}>
        <Helmet>
          <title>My Profile</title>
        </Helmet>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"} flexDirection="row">
            <Heading fontSize={"4xl"} mr="1em">
              Profile
            </Heading>
          </Stack>
          <Box rounded={"lg"} bg={"white"} boxShadow={"lg"} p={8}>
            <Stack spacing={4}>
              <Text>Fistname: {user.name.firstname}</Text>
              <Text>Lastname: {user.name.lastname}</Text>
              <Text>Email: {user.email}</Text>
              <Text>Username: {user.username}</Text>
              <Text>City: {user.address.city}</Text>
              <Text>Street: {user.address.street}</Text>
              <Text>Number: {user.address.number}</Text>
              <Text>Zip-code: {user.address.zipcode}</Text>
              <Text>Username: {user.username}</Text>
              <Text>Phone: {user.phone}</Text>
              <Text>Password: {user.password}</Text>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </div>
  );
}

export default ProfilePage;
