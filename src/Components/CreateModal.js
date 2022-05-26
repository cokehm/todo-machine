import React from "react";
import ReactDOM from "react-dom";
import { TodoForm } from "./TodoForm";
import { Modal, ModalOverlay, ModalContent, ModalCloseButton } from "@chakra-ui/react";

function CreateModal({ addTodo, isOpen, onClose }) {
  return ReactDOM.createPortal(
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <TodoForm addTodo={addTodo} onClose={onClose} />
      </ModalContent>
    </Modal>,
    document.getElementById("modal")
  );
}

export { CreateModal };
