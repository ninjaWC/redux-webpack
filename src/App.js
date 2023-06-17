import React from 'react';

import './App.css';
import {BrowserRouter,} from "react-router-dom";
import Actions from './components/Actions';
import Test from './components/Test';



function App() {


  return (
    <BrowserRouter>
      <Actions/>
      <Test/>
    </BrowserRouter>
  );
}

export default App;
