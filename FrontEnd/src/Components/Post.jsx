import './Post.css' 
import axios from 'axios';
import React, { useState, useContext, useEffect } from 'react'
import { useNavigate} from 'react-router-dom'
import Talla from './Talla'
import AddCarrito from './AddCarrito'
import UserContext from '../Context/UserContext'; // Importa el contexto

const Post = (props) => {
    const { imagen, imagenHover, articulo, precio, color, talla} = props;
    const [hovered, setHovered] = useState(false);

    const [tallaSeleccionada, setTallaSeleccionada] = useState('');

    const handleTallaSeleccionada = (talla) => {
      setTallaSeleccionada(talla);
    };

    const { userData } = useContext(UserContext); // Cambia username a userData
    const userId = userData.id; // Obtén el ID del contexto de usuario
    const userIdInt = parseInt(userId);
    const username = userData.username;
    

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    const handleClick = () => {
        event.preventDefault(); // Evitar que la página se reinicie al hacer clic en el botón
        console.log('Se hizo clic en el div');
        console.log('Datos del producto:', { imagen, articulo, precio, color, talla });
    };

  // Estado para almacenar los valores
  const [values, setValues] = useState({
    articulo: '',
    precio: 0,
    color: '',
    talla: '',
    id:0,
  });

  // useEffect para actualizar los valores cuando tallaSeleccionada cambia
  useEffect(() => {
    setValues(prevValues => ({
      ...prevValues,
      articulo,
      precio,
      color,
      talla: tallaSeleccionada,
      id: userIdInt,
    }));
  }, [articulo, precio, color, tallaSeleccionada]);

      const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Verifica si las contraseñas son iguales
        // if (values.contraseña !== repPassword) {
        //   alert("Las contraseñas no coinciden");
        //   return;
        // }
        if(!userId){
            alert("Inicia sesión para añadir al carrito");
        }else{
            if(!tallaSeleccionada){
                alert("Selecciona una talla");
            }else{
                // Si las contraseñas coinciden, puedes continuar con tu lógica de envío de formulario
                axios.post('http://localhost:8081/carrito' , values)
                  .then(res => {
                      console.log(res);
                      navigate('/')
                      alert("El artículo fue añadido al carrito");
                  })
                  .catch(err => console.log(err))
            }
        }
        

      };

    return (
        <div className="Post">
            <form onSubmit={handleSubmit}>
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
                    <Talla onTallaSeleccionada={handleTallaSeleccionada} />
                    {/* Puedes usar tallaSeleccionada aquí o pasarla a otros componentes */}
                    {/* <p>{tallaSeleccionada}</p> */}
                    </div>
                    <div className='btn-inline-right' onChange={handleClick}>
                        <AddCarrito/>
                    </div>
                </div>
            </div>
            </form>
        </div>
    );
}

export default Post;