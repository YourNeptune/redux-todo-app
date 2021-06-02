import React, { useEffect } from "react";
import "./App.css";
import Input from "./components/Input";
import TodoItem from "./components/TodoItem";
import {useDispatch, useSelector} from 'react-redux'
import {readTodos, selectTodoList} from './features/todoSlice'
import db from "./firebase";


function App() {
  const todoList = useSelector(selectTodoList)
  const dispatch = useDispatch()

  useEffect(() => {
   db.collection("todos").orderBy('timestamp', 'asc').onSnapshot((snapshot) =>
     dispatch(readTodos(snapshot))
   );
  }, [])
  
  return (
    <div className="App">
      <div className="App__container">
        <div className="App__todoContainer">
          {todoList && todoList.map((todo) => (
            <TodoItem name={todo.item} done={todo.done} id={todo.id} key={todo.id}/>
          ))}
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
