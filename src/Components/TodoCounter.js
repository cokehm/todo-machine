import React from "react";
import { Stack, Heading, Text } from "@chakra-ui/react";

function TodoCounter({ totalTodos, completedTodos }) {
  return (
    <Stack padding={4}>
      <Heading as="h1" size="2xl" align="center" color="yellow">
        TODO App
      </Heading>
      <Text fontSize="2xl" align="center" color="yellow">
        {completedTodos} tareas completadas de {totalTodos}
      </Text>
    </Stack>
  );
}

export { TodoCounter };
