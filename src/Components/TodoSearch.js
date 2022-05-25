import React from "react";
import { Stack, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { TodoContext } from "../Services/TodoContext";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext)

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <Stack padding={4}>
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={<SearchIcon />} />
        <Input type="text" placeholder="Buscar..." bg="white" value={searchValue} onChange={onSearchValueChange} />
      </InputGroup>
    </Stack>
  );
}

export { TodoSearch };
