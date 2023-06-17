import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, decrement, deleteTodo, increment } from "../toolkitRedux/toolkitSlice";


const Test = ()=>{
  const dispatch =useDispatch();
  const number = useSelector(state => state.toolkit.count);
  const todos = useSelector(state => state.toolkit.todo);

  function addTODO(){
    let todos = prompt();
    dispatch(addTodo(todos))
  }

  return(
    <div>
      <div>{number}</div>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
      <hr/>
      <button onClick={()=>dispatch(deleteTodo())}> Delete last TODO</button>
      <button onClick={dispatch(addTodo())}>Add TODO</button>

      <ul>
        {todos.map(todo => 
          <div>
            {todo}
          </div>
        )
        }
      </ul>
    </div>
  )
}

export default Test;
