import { Checkbox } from "@material-ui/core";
import React from "react";
import "./TodoItem.css";
import { setCheck } from "../features/todoSlice";
import { useDispatch } from "react-redux";

const TodoItem = ({ name, done, id }) => {
  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch(setCheck(id));
  };

  return (
    <div className="todoItem">
      <Checkbox
        checked={done}
        onChange={handleChange}
        name="checkedF"
        color="primary"
      />
      <p className={done && "todoItem--done"}>{name}</p>
    </div>
  );
};

export default TodoItem;
