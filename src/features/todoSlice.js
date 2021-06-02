//rxSlice
import { createSlice } from "@reduxjs/toolkit";

// const [todoList, setTodoList] = useState([])
// setTodoList(action)
const initialState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    setCheck: (state, action) => {
      state.todoList.map((todo) => {
        if (action.payload === todo.id) {
          todo.done = !todo.done;
        }
      });
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { saveTodo, setCheck, deleteTodo } = todoSlice.actions;

export const selectTodoList = (state) => state.todos.todoList;

export default todoSlice.reducer;
