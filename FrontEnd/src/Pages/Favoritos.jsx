import React, { useContext } from 'react';
import { Link} from 'react-router-dom';
import Header from '../Components/Header'
import UserContext from '../Context/UserContext'; // Importa el contexto

function Favoritos() {
  const { userData } = useContext(UserContext); // Cambia username a userData
  const userId = userData.id; // Obtén el ID del contexto de usuario
  const username = userData.username;
  return (
    <div className='all-container'>
        <Header/>
        <div className='up'>
        <div>
        <p className='title'> FAVORITOS (0) </p>
        <Link to ={`/leerCarrito/${userId}`}><p className='title-muted'> CARRITO</p></Link>
        </div>
        </div>
    </div>
  )
}

export default Favoritos