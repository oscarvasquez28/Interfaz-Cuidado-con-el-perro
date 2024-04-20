import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
// import Component from './Components/Component';
// import Header from '../Components/Header'
// import fondo from './cuidado1.jpg'
import Home from '../Pages/Home.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Create from './Create.jsx'
import Read  from './Read.jsx'
import Dashboard from './Dashboard.jsx';
import SignIn from './SignIn.jsx'
import LogIn from './LogIn.jsx'
import Kids from './Kids.jsx'
import Hombre from './Hombre.jsx'
import Mujer from './Mujer.jsx'
import Favoritos from './Favoritos.jsx';
import Carrito from './Carrito.jsx'

import { UserProvider } from '../Context/UserContext.jsx';


function App() {
  return (
    <BrowserRouter>
    <UserProvider>
      <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/read/:id' element={<Read />} />
          <Route path='/LogIn' element={<LogIn />} />
          <Route path='/SignIn' element={<SignIn />} />
          <Route path='/Mujer' element={<Mujer />} />
          <Route path='/Hombre' element={<Hombre />} />
          <Route path='/Kids' element={<Kids />} />
          <Route path='/Favoritos' element={<Favoritos />} />
          <Route path='/Carrito' element={<Carrito />} />
      </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;

