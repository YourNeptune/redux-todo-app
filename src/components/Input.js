import React, { useState } from "react";
import "./Input.css";
import db from "../firebase";
import firebase from "firebase";

const Input = () => {
  const [input, setInput] = useState("");

  const addTodo = () => {
    db.collection("todos").add({
      item: input,
      done: false,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="input">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default Input;
