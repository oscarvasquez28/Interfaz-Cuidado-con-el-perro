// import React from 'react'
import React, { useState, useEffect, useContext } from 'react';
// import { Link, useLocation } from 'react-router-dom';
import '../Components/Header.css'
import { Link } from 'react-router-dom'
import perro from '../Images/perro.png'
import UserContext from '../Context/UserContext'; // Importa el contexto

const Header = () => {
  const { username } = useContext(UserContext);
    // Estado para controlar si se debe aplicar un fondo diferente al encabezado
    const [scrollDown, setScrollDown] = useState(false);
  
    // Función para manejar el evento de scroll
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrollDown(true); // El usuario ha hecho scroll hacia abajo
      } else {
        setScrollDown(false); // El usuario está en la parte superior de la página
      }
    };
  
    // Agregar un event listener para detectar el scroll
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []); // Se ejecuta solo una vez al montar el componente
  
    return (

      <div className={`header-comp ${scrollDown ? 'scrolled' : ''} ${location.pathname === '/' ? 'home-route' : 'General'}`}>
        <nav className='header-nav'>
            <div className='header-right'>
                <Link to ="/Home">MUJER</Link>
                 <Link to ="/Create">HOMBRE</Link>
                 <Link to ="/">KIDS</Link>
                 <Link to ="/"><i className="bi bi-search"></i>BUSCAR</Link>
            </div>
             <div className='header-center'>
                 <Link to ="/"> <img src={perro} className="logo" alt="logo" /></Link>
            </div>
             <div className='header-left'>
              {/* Expresión condicional para determinar qué mostrar en el Link */}
                {username !== '' ? (
                  <Link to="/profile" className='header-left-mayus'>{username}</Link>
                ) : (
                  <Link to="/LogIn">INICIAR SESIÓN</Link>
                )}
                 <Link to ="/SignIn">FAVORITOS</Link>
                 <Link to ="/SignIn">CARRITO</Link>

            </div>
         </nav>  
     </div>
      
    );
  };
  
  export default Header;

// const Header = props => (

//     <div className='header-comp'>
//         <nav className='header-nav'>
//             <div className='header-right'>
//                 <span>MUJER</span>
//                 <span>HOMBRE</span>
//                 <span>KIDS</span>
//                 <span><i className="bi bi-search"></i>BUSCAR</span>
//             </div>
//             <div className='header-center'>
//                 <Link to ="/"> <img src={perro} className="logo" alt="logo" /></Link>
            
//             </div>
//             <div className='header-left'>
//                 <Link to ="Home">INICIAR SESIÓN</Link>
//                 <Link to ="Create">FAVORITOS</Link>
//                 <Link to ="/">CARRITO</Link>
//             </div>
//         </nav>  
//     </div>

// )

// export default Header