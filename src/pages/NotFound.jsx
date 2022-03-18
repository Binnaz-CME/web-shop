import React from "react";
import { Helmet } from "react-helmet-async";
import { Container, Heading } from "@chakra-ui/react";

function NotFound() {
  return (
    <Container size="sm">
      <Helmet>
        <title>Page not found...</title>
      </Helmet>
      <Heading fontSize="lg" mt="2em" textAlign="center">
        Page not found
      </Heading>
    </Container>
  );
}

export default NotFound;
