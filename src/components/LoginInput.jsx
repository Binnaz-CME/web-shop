import React from "react";
import { useRecoilState } from "recoil";
import { authState, passwordState, usernameState } from "../stores/auth/atom";
import useFetch from "../hooks/useFetch";
import { Link, useNavigate } from "react-router-dom";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link as ChakraLink,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";

export default function LoginInput() {
  const [username, setUsername] = useRecoilState(usernameState);
  const [password, setPassword] = useRecoilState(passwordState);
  const [token, setToken] = useRecoilState(authState);
  const { fetchData } = useFetch();
  const navigate = useNavigate();

  async function handleLogin() {
    const data = await fetchData({
      method: "post",
      url: "https://k4backend.osuka.dev/auth/login",
      data: {
        username: username,
        password: password,
      },
    });
    setToken(data);
    if (data.token) {
      navigate("/mypage");
    }
  }

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} bg={"snow"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features or{" "}
            <ChakraLink color="blue.400" as={Link} to="/register">
              Sign up
            </ChakraLink>
          </Text>
        </Stack>
        <Box rounded={"lg"} bg={"white"} boxShadow={"lg"} p={8}>
          <Stack spacing={4}>
            <FormControl id="username">
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <ChakraLink color={"blue.400"}>Forgot password?</ChakraLink>
              </Stack>
              <Button
                bg={"peachpuff"}
                color={"white"}
                _hover={{
                  bg: "DarkSalmon",
                }}
                onClick={handleLogin}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
