import React from "react";
import { TodoContext } from "./Services/TodoContext";
import { TodoCounter } from "./Components/TodoCounter";
import { TodoSearch } from "./Components/TodoSearch";
import { TodoList } from "./Components/TodoList";
import { TodoItem } from "./Components/TodoItem";
import { CreateTodoButton } from "./Components/CreateTodoButton";
import { CreateModal } from "./Components/CreateModal";
import { Text } from "@chakra-ui/react";
import { TodoLoader } from "./Components/TodoLoader";

function AppUI() {
  const { error, loading, searchedTodos, completeTodo, deleteTodo, isOpen, onOpen, onClose } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {loading && (
          <TodoLoader></TodoLoader>
        )}
        {error && (
          <Text align="center" color="yellow">
            Ha habido un error, recarga la página...
          </Text>
        )}
        {!loading && !searchedTodos.length && (
          <Text align="center" color="yellow">
            Sin datos, agrega tu primer TODO
          </Text>
        )}

        {searchedTodos.map((todo) => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={() => completeTodo(todo.text)} onDelete={() => deleteTodo(todo.text)} />
        ))}
      </TodoList>
      <CreateModal isOpen={isOpen} onClose={onClose}></CreateModal>
      <CreateTodoButton onOpen={onOpen} />
    </React.Fragment>
  );
}

export { AppUI };
