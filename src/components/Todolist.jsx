import React, { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";

function Todolist() {
  const { todos, deleteTodo, editTodo } = useContext(TodoContext);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEdit = (id, currentText) => {
    setEditId(id);
    setEditText(currentText);
  };

  const saveEdit = (id) => {
    if (editText.trim()) {
      editTodo(id, editText.trim());
      setEditId(null);
      setEditText("");
    }
  };

  
  const getCategoryStyle = (category) => {
    switch (category) {
      case "Work":
        return { backgroundColor: "#2563eb", color: "#fff" };
      case "Personal":
        return { backgroundColor: "#10b981", color: "#fff" };
      case "Shopping":
        return { backgroundColor: "#f59e0b", color: "#fff" };
      default:
        return { backgroundColor: "#6b7280", color: "#fff" };
    }
  };

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className="todo-item">
          {editId === todo.id ? (
            <>
              <input
                type="text"
                className="edit-input"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button className="save-btn" onClick={() => saveEdit(todo.id)}>
                Save
              </button>
            </>
          ) : (
            <>
              <span>{todo.todoText}</span>
              <span
                className="category-label"
                style={getCategoryStyle(todo.category)}
              >
                {todo.category}
              </span>
              <div>
                <button
                  className="edit-btn"
                  onClick={() => handleEdit(todo.id, todo.todoText)}
                >
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => deleteTodo(todo.id)}
                >
                  ✖
                </button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default Todolist;
