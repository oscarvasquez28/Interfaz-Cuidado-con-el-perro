import './Post.css'
import React from 'react'
import Talla from './Talla'


const Post = (props) => {
    const {imagen, articulo, precio, color, talla, } = props;

    return (
        <div className="Post">
            <div className="Post-container">
                <img src={imagen} alt="" className='Post-img' />
                <p>Articulo: {articulo}</p>
                <p>Precio: {precio}</p>
                <p>Color: {color}</p>
                <Talla /> {/* Renderiza el componente Talla si la talla está definida */}
            </div>
        </div>
    );
}

export default Post;