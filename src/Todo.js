import React from "react";
import "./Todo.css";

function Todo({ todo }) {
  return <div className="todo__item">{todo}</div>;
}

export default Todo;
