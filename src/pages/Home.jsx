import { Container, Stack, Heading, Text, Image } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container maxW={"7xl"}>
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
                bg: "red.400",
                zIndex: -1,
              }}
            >
              The webshop for,
            </Text>
            <br />
            <Text as={"span"} color={"red.400"}>
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
        <Image
          alt={"Hero Image"}
          fit={"cover"}
          align={"center"}
          w={"100%"}
          h={"100%"}
          src={
            "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
          }
        />
      </Stack>
    </Container>
  );
}
