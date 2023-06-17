import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addCustomerAction, deleteCustomerAction } from "../store/customerReducer";
import { fetchUsers } from "../asyncAction/fetchUsers";



const Actions = ()=>{

  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customer.customer);
/*-----------------------Cash-----------------------*/
  const addCash= () =>{
    let sum = prompt("Cash you want to put");
    dispatch({type:'ADD_CASH', payload: parseInt(sum)});
  }
  const getCash= () =>{
    let sum = prompt("Cash you want to get")
    if(sum > cash){
      alert(`You don't have amount of required money! Your Balance ${cash}`)
    }
    else{
      dispatch({type:'GET_CASH', payload: parseInt(sum)});
    }
  }
/*------------------------Cash----------------------*/

function addCustomer (){
  let custName = prompt();
    const customer = { 
      name: custName, 
      id: Date.now(),
    }
    dispatch(addCustomerAction(customer));
}
function removeCustomer(customer){
  dispatch(deleteCustomerAction(customer.id));
}

  return(
    <div className="App">
        <div className="btns-cash">
          <div className="btns-cash__text">Amount of money: {cash} $</div>
          <button onClick={addCash} className="btns-cash__item increase">Пополнить</button>
          <button onClick={getCash} className="btns-cash__item decrease">Снять</button>
        </div>

        <div className="btns-customer">
          <div className="btns-customer__text">Users: </div>
          <button onClick={addCustomer} className="btns-customer__add">Добавить</button>
          <button onClick={removeCustomer} className="btns-customer__remove">Удалить</button>
          <button onClick={() => dispatch(fetchUsers())} className=" btns-customer__all"> Список Всех Пользователей </button>

          {customers.length > 0 
          ?<div className='client'>
            {customers.map(customer => 
              <div className='client__item' onClick={()=>{removeCustomer(customer)}} key={customer.name}>{customer.name}</div>
            )}
          </div>
          :<div className='empty-client'>База Клиентов пуста!!!</div>
          }
        </div>
      </div>
  )
}


export default Actions;