import './PostCheckOut.css' 


import React, { useState } from 'react'


const PostCheckOut = (props) => {
    return (
        <div className="pco-Post">
          <div className="pco-Post-container">
            <img 
              src={props.image} // Cambia la imagen según el estado hovered
              alt=""
              className="pco-Post-img"
            />
          </div>

          <div className='pco-Data-container'>
            <div className='pco-datos-Articulo'>

              <div className='nombre-articulo'>
                 <p>{props.articulo}</p>  
              </div>
             
              <div className='daatos-articulo'>
                <p>Color: {props.color}</p>
                <p>Talla: {props.talla}</p>
                <p>Cantidad: {props.talla}</p>
              </div>               
             
            </div>
                  
          </div>

          <div className='pco-price'>
            <p className='pco-Precio-bold'>${props.precio}.00</p>
          </div> 
         
        </div>
    );
}

export default PostCheckOut;