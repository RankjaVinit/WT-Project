import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/Login/LoginPage';
import SignIn from './Pages/Login/SignIn';
import SignUp from './Pages/Login/SignUp';
import Home from './Pages/Home/Home';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Home/>
  // <Login />  
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<LoginPage />}> 
          <Route path='/' element={<SignIn />}/>
          <Route path='/signup' element={<SignUp />}/>
        </Route>

        <Route path='/user/:id' element={<Home />}/>
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);