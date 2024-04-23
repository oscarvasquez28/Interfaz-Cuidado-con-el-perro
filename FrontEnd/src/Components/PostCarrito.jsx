import './PostCarrito.css' 
import Selector from './SelectorDePiezas'
import Talla from './Talla'
import React, { useState } from 'react'


const PostCarrito = (props) => {
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
              <i className="bi bi-trash pc-iconoTrash" type="button"></i>
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