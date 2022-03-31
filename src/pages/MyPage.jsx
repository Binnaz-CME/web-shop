import React, { useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { userState, authState } from "../stores/auth/atom";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router";
import { Button } from "@chakra-ui/button";
import { Heading, VStack, Center } from "@chakra-ui/react";

function MyPage() {
  const [user, setUser] = useRecoilState(userState);
  const { fetchData } = useFetch();
  const [token, setToken] = useRecoilState(authState);
  const navigate = useNavigate();

  if (!token) {
    return <div>Loading...</div>;
  }

  useEffect(() => {
    async function getUser() {
      const data = await fetchData({
        method: "get",
        url: `https://k4backend.osuka.dev/users/${token.userId}`,
      });
      setUser(data);
    }
    getUser();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  function handleLogout(){
    navigate('/')
    setToken("");
  }

  return (
    <div>
      <VStack>
        <Heading>My Page</Heading>
        <p>Fistname: {user.name.firstname}</p>
        <p>Lastname: {user.name.lastname}</p>
        <p>Email: {user.email}</p>
        <p>Username: {user.username}</p>
        <p>City: {user.address.city}</p>
        <p>Street: {user.address.street}</p>
        <p>Number: {user.address.number}</p>
        <p>Zip-code: {user.address.zipcode}</p>
        <p>Username: {user.username}</p>
        <p>Phone: {user.phone}</p>
        <p>Password: {user.password}</p>
        <Button
          bg={"peachpuff"}
          color={"white"}
          _hover={{
            bg: "DarkSalmon",
          }}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </VStack>
    </div>
  );
}

export default MyPage;
