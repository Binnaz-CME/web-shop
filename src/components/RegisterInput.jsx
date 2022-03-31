import React, { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  Spinner,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { userState } from "../stores/auth/atom";
import useFetch from "../hooks/useFetch";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

export default function RegisterInput() {
  const [showPassword, setShowPassword] = useState(false);
  const { fetchData, loading, error } = useFetch();
  const [user, setUser] = useRecoilState(userState);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  console.log(user);

  async function createUser() {
    const data = await fetchData({
      method: "post",
      url: "https://k4backend.osuka.dev/users",
      data: {
        email: email,
        username: username,
        password: password,
        role: role,
        name: {
          firstname: firstname,
          lastname: lastname,
        },
        address: {
          city: city,
          street: street,
          number: number,
          zipcode: zipcode,
        },
        phone: phone,
      },
    });
    setUser(data);
    console.log(data);
    if (data.id) {
      navigate("/login");
    }
  }
console.log(error)

  function renderSignUpForm() {
    return (
      <Flex minH={"100vh"} align={"center"} justify={"center"} bg={"snow"}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Sign up
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box rounded={"lg"} bg={"white"} boxShadow={"lg"} p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl name="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      type="text"
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl name="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      type="text"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl name="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <HStack>
                <FormControl name="usename" isRequired>
                  <FormLabel>Username</FormLabel>
                  <Input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </FormControl>
                <FormControl name="role" isRequired>
                  <FormLabel>Role</FormLabel>
                  <Input
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  />
                </FormControl>
              </HStack>
              <HStack>
                <FormControl name="address" isRequired>
                  <FormLabel>Street</FormLabel>
                  <Input
                    type="text"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                  />
                </FormControl>
                <FormControl name="number" isRequired>
                  <FormLabel>Number</FormLabel>
                  <Input
                    type="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </FormControl>
                <FormControl name="zipcode" isRequired>
                  <FormLabel>Zip-code</FormLabel>
                  <Input
                    type="number"
                    value={zipcode}
                    onChange={(e) => setZipcode(e.target.value)}
                  />
                </FormControl>
              </HStack>
              <HStack>
                <FormControl name="city" isRequired>
                  <FormLabel>City</FormLabel>
                  <Input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </FormControl>
                <FormControl name="phone" isRequired>
                  <FormLabel>Phone</FormLabel>
                  <Input
                    type="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </FormControl>
              </HStack>
              <FormControl name="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"peachpuff"}
                  color={"white"}
                  _hover={{
                    bg: "DarkSalmon",
                  }}
                  onClick={createUser}
                >
                  Sign up
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }

  return <>{loading ? <Spinner /> : <main>{renderSignUpForm()}</main>}</>;
}
