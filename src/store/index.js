import { combineReducers, applyMiddleware} from "redux";
import { cashReducer } from "./cashReducer";
import { customerReducer } from "./customerReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import rtkReducer from "./rtkReducer";
import toolkitReducer from "../toolkitRedux/toolkitReducer";
import { configureStore } from "@reduxjs/toolkit";
import toolkitSlice from "../toolkitRedux/toolkitSlice";

const rootReducer = combineReducers({ 
  cash: cashReducer,
  customer: customerReducer,
  toolkit: toolkitSlice,
})

export const store = configureStore({
  reducer: rootReducer,
}, composeWithDevTools(applyMiddleware(thunk)));