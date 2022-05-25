import React from "react";
import { Flex, Spacer, Button } from "@chakra-ui/react";

function CreateTodoButton({onOpen}) {

  return (
    <Flex padding="4">
      <Spacer />
      <Button colorScheme="yellow" size="lg" onClick={onOpen}>
        Agregar
      </Button>
    </Flex>
  );
}

export { CreateTodoButton };
