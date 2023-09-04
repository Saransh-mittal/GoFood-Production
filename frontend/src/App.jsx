import './App.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/signup';
import { createContext, useReducer } from 'react';
import { reducer } from './reducer/useReducer';
import MyOrder from './screens/MyOrder';

export const cartContext = createContext();
const App = () => {
  const [state,dispatch] = useReducer(reducer,[]);
  return (
    <>
    
      <cartContext.Provider value={{state,dispatch}}>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/register' element={<Signup/>} />
        <Route exact path='/myorder' element={<MyOrder/>} />
      </Routes>
      </cartContext.Provider>

      
    </>
  )
}

export default App;
