import React, { useContext } from 'react';
import Header from '../Components/Header'
import UserContext from '../Context/UserContext'; // Importa el contexto

import '../Pages/Profile.css'
function Profile() {
    const { userData } = useContext(UserContext); // Cambia username a userData
    const userId = userData.id; // Obtén el ID del contexto de usuario
    const username = userData.username;
  return (
    <div>
        <Header/>
        <div className='Profile-name'>
            <h1>Usuario: {username}</h1>
            <h1>ID: {userId}</h1>
        </div>
    </div>
  )
}

export default Profile