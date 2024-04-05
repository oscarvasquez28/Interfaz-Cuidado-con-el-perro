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


function App() {
  return (
    // <div className="App">
    //   <div className='App-Home'>
    //     <header className="App-header">        
    //     {/* <img src={fondo} className="App-fondo" alt="fondo" /> */}
    //       <Header/>
    //       {/* <Component/> */}
    //     </header>
    //     {/* <img src={logo} className="App-logo" alt="logo" /> */}
    //   </div>
    // </div>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/read/:id' element={<Read />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

