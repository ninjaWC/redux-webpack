const defaultValue = {
  customer:[{
    name:"Ali",
    id:1,
  }]  
}

const GET_ALL_CUSTOMERS = "GET_ALL_CUSTOMERS";
const ADD_CUSTOMER = "ADD_CUSTOMER";
const DELETE_CUSTOMER = "DELETE_CUSTOMER";

export const customerReducer = (state = defaultValue , action) => {
  switch(action.type){
    case GET_ALL_CUSTOMERS:
      return {...state, customer: [...state.customer, ...action.payload]}
    case ADD_CUSTOMER:  
      return {...state, customer: [...state.customer,action.payload ]};
    case DELETE_CUSTOMER: 
      return {...state, customer: state.customer.filter(customer => customer.id !== action.payload)}
    default: 
      return state;
  }
}
export const getAllCustomers = (payload) => {return {type:GET_ALL_CUSTOMERS, payload}};
export const addCustomerAction = (payload) => {return {type: ADD_CUSTOMER, payload}};
export const deleteCustomerAction = (payload) => {return{type: DELETE_CUSTOMER, payload}};

