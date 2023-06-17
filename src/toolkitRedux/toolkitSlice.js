import { createSlice } from "@reduxjs/toolkit";

const sliceToolkit = createSlice({
  name: "slice",
  initialState:{
    count: 0,
    todo: ['Go to eat']
  },
  reducers:{
    increment(state){
      state.count = state.count + 1;
    },
    decrement(state){
      state.count = state.count - 1;
    },
    addTodo(state, action){
      state.todo.push(action.payload)
    },
    deleteTodo(state, action) { 
      state.todo.pop();
    }
  }
})


export default sliceToolkit.reducer;
export const {increment,decrement,addTodo,deleteTodo} = sliceToolkit.actions;