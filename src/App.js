import { Button, TextField } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./App.css";
import Todo from "./Todo";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(snapshot.docs.map((doc) => doc.data().text));
      });
  }, []);

  const addTodo = (event) => {
    event.preventDefault();

    db.collection("todos").add({
      text: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="app">
      <h1>Todos</h1>
      <form>
        <TextField
          id="todo__input"
          label="Enter the New Todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button
          type="submit"
          disabled={!input}
          id="add__todo__button"
          variant="contained"
          color="primary"
          onClick={addTodo}
        >
          Add Todo
        </Button>
      </form>
      {todos?.map((todo) => (
        <Todo todo={todo} />
      ))}
    </div>
  );
}

export default App;
