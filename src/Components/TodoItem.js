import React from "react";
import { GridItem, Box, Flex, Text } from "@chakra-ui/react";
import { CheckIcon, DeleteIcon } from "@chakra-ui/icons";
import "../Styles/TodoItem.scss";

function TodoItem(props) {

  return (
    <GridItem>
      <Box boxShadow="lg" p="4" bg="white" borderRadius="6px">
        <Flex align="center" justify="space-between">
          <CheckIcon color={props.completed && "teal"} onClick={props.onComplete} />
          <Text p="4" noOfLines={1} as={props.completed && "del"}>
            {props.text}
          </Text>
          <DeleteIcon color="red" onClick={props.onDelete} />
        </Flex>
      </Box>
    </GridItem>
  );
}

export { TodoItem };
