import './Post.css'
import React from 'react'
import Talla from './Talla'
import AddCarrito from './AddCarrito'


const Post = (props) => {
    const {imagen, articulo, precio, color, talla, } = props;

    return (
        <div className="Post">
            <div className="Post-container">
                <img src={imagen} alt="" className='Post-img' />
                <p>Articulo: {articulo}</p>
                <p className='Precio-bold'>Precio: ${precio}.00</p>
                <p>Color: {color}</p>
                <div className='btn-inline'>
                    <div className='btn-inline-left'>
                        <Talla /> {/* Renderiza el componente Talla si la talla está definida */}
                    </div>
                    <div className='btn-inline-right'>
                        <AddCarrito/>
                    </div>

                
                </div>

            </div>
        </div>
    );
}

export default Post;