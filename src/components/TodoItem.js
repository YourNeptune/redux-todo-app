import { Checkbox } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";
import "./TodoItem.css";
import { setCheck, deleteTodo } from "../features/todoSlice";
import { useDispatch } from "react-redux";
import db from "../firebase";

const TodoItem = ({ name, done, id }) => {
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(setCheck(id));

    db.collection("todos").doc(id).set(
      {
        done: !done,
      },
      { merge: true }
    );
  };

  const handleDelete = () => {
    dispatch(deleteTodo(id));

    db.collection("todos").doc(id).delete();
  };

  return (
    <div className="todoItem">
      <Checkbox
        checked={done}
        onChange={handleChange}
        name="checkedF"
        color="primary"
      />
      <p className={done ? "todoItem--done" : ""}>{name}</p>
      <div className="todoItem__deleteButton">
        <DeleteIcon onClick={handleDelete} />
      </div>
    </div>
  );
};

export default TodoItem;
