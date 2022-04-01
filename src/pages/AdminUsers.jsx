import React, { useState, useEffect } from "react";
import AdminNav from "../components/AdminNav";
import useFetch from "../hooks/useFetch";
import { nanoid } from "nanoid";
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

function AdminUsers() {
  const [allUsers, setAllUsers] = useState([]);
  const { fetchData, loading } = useFetch();

  useEffect(() => {
    async function getAllUsers() {
      const data = await fetchData({
        method: "get",
        url: "https://k4backend.osuka.dev/users",
      });
      setAllUsers(data);
    }
    getAllUsers();
  }, []);

  if (!allUsers) {
    return (
      <Spinner
        size="xl"
        thickness="5px"
        speed="0.65s"
        emptyColor="gray.200"
        color="black"
      />
    );
  }
  if (loading) return <Spinner />;

  return (
    <div>
      <AdminNav />
      <Flex justifyContent="center" alignItems="flex-start">
        <VStack alignItems="flex-start">
          <Heading>Users</Heading>
          <UnorderedList>
            {allUsers.map(({ name, email, phone, role, username }) => (
              <HStack
                key={nanoid()}
                m="3"
                divider={<StackDivider borderColor="gray.200" />}
              >
                <ListItem>
                  Name: {name.firstname} {name.lastname}
                </ListItem>
                <ListItem listStyleType="none">Email: {email}</ListItem>
                <ListItem listStyleType="none">Phone: {phone}</ListItem>
                <ListItem listStyleType="none">Role: {role}</ListItem>
                <ListItem listStyleType="none">Phone: {phone}</ListItem>
                <ListItem listStyleType="none">Username: {username}</ListItem>
              </HStack>
            ))}
          </UnorderedList>
        </VStack>
      </Flex>
    </div>
  );
}

export default AdminUsers;
