import React from "react";
import "./App.css";
import Input from "./components/Input";
import TodoItem from "./components/TodoItem";
import {useSelector} from 'react-redux'
import {selectTodoList} from './features/todoSlice'


function App() {
  const todoList = useSelector(selectTodoList)
  
  return (
    <div className="App">
      <div className="App__container">
        <div className="App__todoContainer">
          {todoList && todoList.map((todo) => (
            <TodoItem name={todo.item} done={todo.done} id={todo.id} />
          ))}
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
