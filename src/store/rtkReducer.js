

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const initialScale = {
  count: 2,
  todo:['']
}

export default function rtkReducer (state = initialScale, action){
  switch(action.type){
    case INCREMENT:
      return {...state, count:state.count + 1}
    case DECREMENT: 
      return {...state, count:state.count - 1}
    case ADD_TODO: 
      return {
        ...state,
        todo: [...state.todo, action.payload]
      }
    case DELETE_TODO:
      return{
        ...state,
        todo: [...state.todo.slice(0, state.todo.length - 1)]
      }
    default:
      return state
  }
}

export const increment = ()=>({type:INCREMENT});
export const decrement = () => ({type:DECREMENT});
export const addTodo = (payload) => ({type:ADD_TODO, payload});
export const delTodo = () => ({type:DELETE_TODO});

