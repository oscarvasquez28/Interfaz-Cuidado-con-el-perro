// import React from 'react'
import React, { useState, useEffect, useContext } from 'react';

// import { Link, useLocation } from 'react-router-dom';
import '../Components/Header.css'
import { Link } from 'react-router-dom'

// import introJs from 'intro.js';
// import 'intro.js/introjs.css';

import perro from '../Images/perro.png'
import UserContext from '../Context/UserContext'; // Importa el contexto
import HombreMenu from './HombreMenu';
import MujerMenu from './MujerMenu';
import KidsMenu from './KidsMenu';



const Header = () => {
  const { userData } = useContext(UserContext); // Cambia username a userData
  const userId = userData.id; // Obtén el ID del contexto de usuario
  const username = userData.username;
    // Estado para controlar si se debe aplicar un fondo diferente al encabezado
    const [scrollDown, setScrollDown] = useState(false);
    const [mostrarMenuHombre, setMostrarMenuHombre] = useState(false);
    const [mostrarMenuMujer, setMostrarMenuMujer] = useState(false);
    const [mostrarMenuKids, setMostrarMenuKids] = useState(false);
    const [mostrarMenu1, setMostrarMenu1] = useState(false);
    const [mostrarMenu2, setMostrarMenu2] = useState(false);
    const [mostrarMenu3, setMostrarMenu3] = useState(false);

    //Para saber si está el cursor sobre el nav
    const [isHovered, setIsHovered] = useState(false);

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

      <div
      className={`header-comp ${scrollDown ? 'scrolled' : ''} ${location.pathname === '/' ? 'home-route' : 'General'} 
      ${(isHovered || mostrarMenu1 || mostrarMenu2 || mostrarMenu3) ? 'hovered-nav' : ''}`}>
        <nav className='header-nav'>
              <div
              className={`header-left ${(isHovered) 
                ? 'hovered-header-left' : ''}`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              >
              <div className='alturaa' id='mujer-navbar'
                onMouseEnter={() => {
                setMostrarMenu1(true);
                setMostrarMenuMujer(false);
                }}
                onMouseLeave={() => {
                setMostrarMenu1(false);
                setMostrarMenuMujer(false);
                }}>
                <Link to ="/Mujer">MUJER</Link>
              </div>
              <div className='alturaa' id='hombre-navbar'
                onMouseEnter={() => {
                setMostrarMenu2(true);
                setMostrarMenuHombre(false);
                }}
                onMouseLeave={() => {
                setMostrarMenu2(false);
                setMostrarMenuHombre(false);
                }}>     
                  <Link to ="/Hombre">HOMBRE</Link>
              </div>
              <div className='alturaa' id='ninos-navbar'
                onMouseEnter={() => {
                setMostrarMenu3(true);
                setMostrarMenuKids(false);
                }}
                onMouseLeave={() => {
                setMostrarMenu3(false);
                setMostrarMenuKids(false);
                }}>
                <Link to ="/Kids">NIÑOS</Link>
              </div>
              <div className='alturaa' id='Buscar-navbar'>
                <Link to ="/Search"><i className="bi bi-search"></i>BUSCAR</Link>
              </div>       
            </div>
             <div className='header-center'>
                 <Link to ="/"> <img src={perro} className="logo" alt="logo" /></Link>
            </div>
             <div className='header-right'>
              {/*Si es mayor a 0 significa que hay un usuario loggeado*/}
                {userId > 1 ? (
                  <Link to="/profile" className='header-left-mayus' >{username}</Link>
                ) : (
                  <Link to="/LogIn" id='LogIn-navbar'>INICIAR SESIÓN</Link>
                )}
                 <Link to ="/Favoritos" id='Favoritos-navbar'>FAVORITOS</Link>
                 <Link to={`/leerCarrito/${userId}`} id='Carrito-navbar'>CARRITO</Link>

            </div>
         </nav>
          {/* Mostrar menu mujer del nav bar */}
         {(mostrarMenuMujer || mostrarMenu1) &&(
          <div  
            onMouseEnter={() => {
              setMostrarMenu1(true);
              setMostrarMenuMujer(false);
            }}
            onMouseLeave={() => {
              setMostrarMenu1(false);
              setMostrarMenuMujer(false); //true
            }}>
            <MujerMenu/>
          </div>
        )}
          {/* Mostrar menu hombre del nav bar */}
         {(mostrarMenuHombre || mostrarMenu2) &&(
          <div  
            onMouseEnter={() => {
              setMostrarMenu2(true);
              setMostrarMenuHombre(false);
            }}
            onMouseLeave={() => {
              setMostrarMenu2(false);
              setMostrarMenuHombre(false); //true
            }}>
            <HombreMenu/>
          </div>
        )}
          {/* Mostrar menu kids del nav bar */}
          {(mostrarMenuKids || mostrarMenu3) &&(
          <div  
            onMouseEnter={() => {
              setMostrarMenu3(true);
              setMostrarMenuKids(false);
            }}
            onMouseLeave={() => {
              setMostrarMenu3(false);
              setMostrarMenuKids(false); //true
            }}>
            <KidsMenu/>
          </div>
        )}
     </div>
      
    );
  };
  
  export default Header;
