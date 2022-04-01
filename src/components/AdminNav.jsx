import React from "react";
import { Link } from "react-router-dom";
import { Box, HStack } from "@chakra-ui/react";

function AdminNav() {
  return (
    <Box
      bg="tan"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      height="2em"
    >
      <HStack alignItems="center" ml="2em">
        <Link to="/admin/usercarts">Carts</Link>
        <Link to="/admin">Products</Link>
        <Link to="/admin/users">Users</Link>
      </HStack>
    </Box>
  );
}
export default AdminNav;
