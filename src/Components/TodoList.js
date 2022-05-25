import React from "react";
import { Grid } from "@chakra-ui/react";

function TodoList(props) {
  return (
    <Grid templateColumns="repeat(1, 1fr)" padding={4} gap={6}>
      {props.children}
    </Grid>
  );
}

export { TodoList };
