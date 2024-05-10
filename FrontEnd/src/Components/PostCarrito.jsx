import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import './PostCarrito.css' 
import Selector from './SelectorDePiezas'
import UserContext from '../Context/UserContext'; // Importa el contexto

const PostCarrito = (props) => {

  const { userData } = useContext(UserContext); // Cambia username a userData
  const userId = userData.id; // Obtén el ID del contexto de usuario
  const username = userData.username;

  const handleDelete = () => {
    axios.delete(`http://localhost:8081/delete?id=${props.id}`)
        .then(response => {
            console.log(response);
            alert("El artículo fue eliminado del carrito");
            // Realiza alguna acción adicional si es necesario
        })
        .catch(error => {
            console.error(error);
            alert("Hubo un error al intentar eliminar el artículo del carrito");
        });
};

    return (
        <div className="pc-Post">
          <div className="pc-Post-container">
            <img 
              src={props.image} // Cambia la imagen según el estado hovered
              alt=""
              className="pc-Post-img"
            />
          </div>

          <div className='pc-Data-container'>
            <div className='pc-datos-Articulo'>
              <p>{props.articulo}</p>                 
              <p><span>Color:</span> {props.color}</p>
              <p><span>Talla:</span> {props.talla}</p>
            </div>

            <div className='pc-btn-inline-left '>
              <Selector /> {/* Renderiza el componente Talla si la talla está definida */}
              <Link to ='/'><i className="bi bi-trash pc-iconoTrash" type="button" onClick={handleDelete}></i></Link>               
              
            </div>              
          </div>

          <div className='pc-price'>
            <p className='pc-Precio-bold'>${props.precio}.00</p>
          </div> 

          <div className='pc-novedad'>
            NOVEDADES
          </div> 

        </div>
    );
}

export default PostCarrito;