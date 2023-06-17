import { createAction, createReducer } from "@reduxjs/toolkit"

const initialScale = {
  count: 0,
  todo:[''],
}

export const increment = createAction('INCREMENT');
export const decrement = createAction('DECREMENT');

export default createReducer(initialScale,{
  [increment]: function(state){
    state.count = state.count + 1
  },
  [decrement]: function(state){
    state.count = state.count - 1
  }
})
