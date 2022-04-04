import React from "react";
import { Button } from "@chakra-ui/react";

function ButtonComp({ buttontext, margin, size, ...rest }) {
  return (
    <Button
      {...rest}
      size={size}
      m={`${margin}em`}
      bg={"peachpuff"}
      color={"white"}
      _hover={{
        bg: "DarkSalmon",
      }}
    >
      {buttontext}
    </Button>
  );
}

export default ButtonComp;
