import React, { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";

function Todoinput() {
  const { addTodo } = useContext(TodoContext);
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("General");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo(task, category);
      setTask("");
      setCategory("General");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-input-container">
      <input
        type="text"
        className="todo-input"
        placeholder="Enter your task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="category-select"
      >
        <option value="General">General</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Shopping">Shopping</option>
      </select>
      <button type="submit" className="add-todo-btn">
        Add Task
      </button>
    </form>
  );
}

export default Todoinput;
