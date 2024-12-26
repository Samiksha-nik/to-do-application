import React, { useState } from "react";
import TodoContext from "./TodoContext";

function TodoContextProvider({ children }) {
  const [todos, setTodos] = useState([]);

  const addTodo = (text, category) => {
    if (!text) return;

    const todo = {
      todoText: text,
      isCompleted: false,
      id: Date.now(),
      category: category || "General", // Default category 
    };

    setTodos((prev) => [...prev, todo]);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, updatedText) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, todoText: updatedText } : todo
      )
    );
  };

  return (
    <TodoContext.Provider value={{ addTodo, todos, deleteTodo, editTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

export default TodoContextProvider;
