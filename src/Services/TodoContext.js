import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import { useDisclosure } from "@chakra-ui/react";

const TodoContext = React.createContext();

function TodoProvider(props) {
  const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage("TODOS_v1", []);

  // ModalState
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Todo Search
  const [searchValue, setSearchValue] = React.useState("");

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText);
    });
  }

  // Todo counter
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  // Complete todos
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  // Delete todos
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  // Add todos
  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({ completed: false, text });
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        loading,
        error,
        isOpen,
        onOpen,
        onClose,
        addTodo
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
