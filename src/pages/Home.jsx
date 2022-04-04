import React from "react";
import { Helmet } from "react-helmet-async";
import commerceImage from "../assets/commerce.webp";
import { Container, Stack, Heading, Text, Image } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container maxW={"7xl"}>
      <Helmet>
        <title>Webshop</title>
      </Helmet>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "peachpuff",
                zIndex: -1,
              }}
            >
              The webshop for,
            </Text>
            <br />
            <Text as={"span"} color={"peachpuff"}>
              everything and nothing!
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            optio, at temporibus dolore enim, laboriosam veritatis, doloribus
            voluptatibus distinctio velit explicabo hic blanditiis ea. Eius,
            porro reprehenderit. Ratione, id soluta.
          </Text>
        </Stack>
        <Container maxW="container.lg">
          <Image
            alt={"Hero Image"}
            fit={"cover"}
            align={"center"}
            maxW={"100%"}
            maxH={"100%"}
            src={commerceImage}
          />
        </Container>
      </Stack>
    </Container>
  );
}
