import './Post.css'
import React, { useState } from 'react'
import Talla from './Talla'
import AddCarrito from './AddCarrito'


const Post = (props) => {
    const { imagen, imagenHover, articulo, precio, color, talla } = props;
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div className="Post">
            <div className="Post-container">
                <img src={hovered ? imagenHover : imagen} // Cambia la imagen según el estado hovered
                    alt=""
                    className="Post-img"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />
                <p>{articulo}</p>
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