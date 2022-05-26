import React from "react";
import { Box, Container, Text } from "@chakra-ui/react";
import { useTodos } from "./Services/useTodos";
import { TodoHeader } from "./Components/TodoHeader";
import { TodoCounter } from "./Components/TodoCounter";
import { TodoSearch } from "./Components/TodoSearch";
import { TodoList } from "./Components/TodoList";
import { TodoItem } from "./Components/TodoItem";
import { CreateTodoButton } from "./Components/CreateTodoButton";
import { CreateModal } from "./Components/CreateModal";
import { TodoForm } from "./Components/TodoForm";
import { TodoLoader } from "./Components/TodoLoader";

function App() {
  const { completedTodos, totalTodos, searchValue, setSearchValue, searchedTodos, completeTodo, deleteTodo, loading, error, isOpen, onOpen, onClose, addTodo } = useTodos();

  return (
    <Box w="100vw" h="100%" minH="100vh" bgGradient="linear(to-l, #7928CA, #FF0080)">
      <Container>
        <TodoHeader>
          <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
          <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
        </TodoHeader>
        <TodoList>
          {loading && <TodoLoader></TodoLoader>}
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
        <CreateModal addTodo={addTodo} isOpen={isOpen} onClose={onClose} />
        <CreateTodoButton onOpen={onOpen} />
      </Container>
    </Box>
  );
}

export default App;
