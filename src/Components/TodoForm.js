import React from "react";
import { FormControl, FormLabel, Textarea, ModalBody, ModalFooter, Button } from "@chakra-ui/react";
import { TodoContext } from "../Services/TodoContext";

function TodoForm({ onClose }) {
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const { addTodo } = React.useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
  };

  return (
    <form onSubmit={onSubmit}>
      <ModalBody mt={5}>
        <FormControl>
          <FormLabel htmlFor="addNewTodo">Agregar TODO:</FormLabel>
          <Textarea id="addNewTodo" placeholder="Tomar agua" value={newTodoValue} onChange={onChange} />
        </FormControl>
      </ModalBody>
      <ModalFooter>
        <Button type="submit" colorScheme="purple" mr={3}>
          Confirmar
        </Button>
        <Button colorScheme="purple" variant="outline" onClick={onClose}>
          Cancelar
        </Button>
      </ModalFooter>
    </form>
  );
}

export { TodoForm };
