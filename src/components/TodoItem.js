import { Checkbox } from '@material-ui/core';
import React from 'react'
import './TodoItem.css'

const TodoItem = ({name, done, id}) => {
    const handleChange = () =>{
        
    }
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
}

export default TodoItem
