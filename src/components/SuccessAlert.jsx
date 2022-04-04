import React from "react";
import { useNavigate } from "react-router";
import ButtonComp from '../components/ButtonComp'
import {
  Alert,
  AlertDescription,
  AlertTitle,
  AlertIcon,
} from "@chakra-ui/react";

function SuccessAlert() {
  const navigate = useNavigate();

  return (
    <Alert
      status="success"
      colorScheme="orange"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="650px"
    >
      <AlertIcon boxSize="40px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        Sign up successfull!
      </AlertTitle>
      <AlertDescription maxWidth="sm">
        Thanks for signing up! Login to get ful access.
      </AlertDescription>
      <ButtonComp
       buttontext="Go to sign in"
       margin={2}
        onClick={() => {
          navigate("/login");
        }}
      />
    </Alert>
  );
}

export default SuccessAlert;
