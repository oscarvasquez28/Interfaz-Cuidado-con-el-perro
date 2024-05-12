import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './PostCarrito.css';
import Selector from './SelectorDePiezas';
import UserContext from '../Context/UserContext'; // Importa el contexto

const PostCarrito = (props) => {
  const { userData } = useContext(UserContext);
  const userId = userData.id;
  const username = userData.username;

  const handleDelete = () => {
    axios
      .delete(`http://localhost:8081/delete?id=${props.id}`)
      .then((response) => {
        console.log(response);
        alert('El artículo fue eliminado del carrito');

        // Encuentra el contenedor del artículo y elimínalo del DOM
        const container = document.getElementById(`item-${props.id}`);
        if (container) {
          container.remove();
        }

        // Realiza alguna acción adicional si es necesario
      })
      .catch((error) => {
        console.error(error);
        alert('Hubo un error al intentar eliminar el artículo del carrito');
      });
  };

  return (
    <div id={`item-${props.id}`} className="pc-Post"> {/* Agrega un identificador único al contenedor */}
      <div className="pc-Post-container">
        <img src={props.image} alt="" className="pc-Post-img" />
      </div>

      <div className="pc-Data-container">
        <div className="pc-datos-Articulo">
          <p>{props.articulo}</p>
          <p>
            <span>Color:</span> {props.color}
          </p>
          <p>
            <span>Talla:</span> {props.talla}
          </p>
        </div>

        <div className="pc-btn-inline-left ">
          <Selector />
          {/* Renderiza el componente Talla si la talla está definida */}

            {/* Aquí envuelve el ícono de borrar dentro de un Link */}
            <i className="bi bi-trash pc-iconoTrash" type="button" onClick={handleDelete}></i>

        </div>
      </div>

      <div className="pc-price">
        <p className="pc-Precio-bold">${props.precio}.00</p>
      </div>

      <div className="pc-novedad">NOVEDADES</div>
    </div>
  );
};

export default PostCarrito;
