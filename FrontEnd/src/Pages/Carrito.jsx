import React, { useEffect, useState, useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import UserContext from '../Context/UserContext'; 
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import DropDown from '../Components/DropDown';
import PostCarrito from '../Components/PostCarrito';

import '../Pages/Carrito.css'; 

function Carrito() {
  const { userData } = useContext(UserContext); 
  const userId = userData.id;
  const navigate = useNavigate();
  const { id } = useParams();
  const [carritos, setCarritos] = useState([]);
  const [botonSeleccionado, setBotonSeleccionado] = useState([]);
  let totalparcial = 0;
  let totalfinal = 0;
  let CostoEnvio = 'Gratis';
  let Envio = 'Envío Gratuito';

  for (let [index, carrito] of carritos.entries()) {
    if (carrito.comprado == 'no') {
      const cantidadSeleccionada = botonSeleccionado[index] || 1;
      totalparcial += parseFloat(carrito.precio) * cantidadSeleccionada;
    }
  }

  if (totalparcial >= 599) {
    CostoEnvio = 'Gratis';
    Envio = 'Envío Gratuito';
    totalfinal = totalparcial;
  } else {
    if (carritos.length > 0) {
      CostoEnvio = '$65';
      Envio = 'Envio Gratuito a partir de 599 MXN';
      totalfinal = totalparcial + 65;
    }
  }

  useEffect(() => {
    axios.get(`http://localhost:8081/LeerCarrito/${userId}`)
      .then(res => {
        setCarritos(res.data);
        setBotonSeleccionado(res.data.map(() => 1));
      })
      .catch(err => console.log(err));
  }, [id]);

  const handleDelete = (aidi) => {
    axios
      .delete(`http://localhost:8081/delete?id=${aidi}`)
      .then(response => {
        alert('El artículo fue eliminado del carrito');
        setCarritos(carritos.filter(carrito => carrito.id !== aidi));

        setBotonSeleccionado(prevState => {
          const newState = [...prevState];
          const index = carritos.findIndex(carrito => carrito.id === aidi); // Obtener el índice del artículo eliminado
          newState[index] = 0; // Establecer el valor del dropdown a 0
          return newState;
        });
        
      })
      .catch(error => console.error(error));
  };

  const handleClick = (valor, index) => {
    setBotonSeleccionado(prevState => {
      const newState = [...prevState];
      newState[index] = valor;
      return newState;
    });
  };

  return (
    <div className='all-container'>
      <Header/>
      <div className='up'>
        <div>
          <Link to="/Favoritos"><p className='title-muted'> FAVORITOS (0) </p></Link>
          <p className='title'> CARRITO ({carritos.filter(carrito => carrito.comprado === 'no').length + botonSeleccionado.reduce((acc, currentValue) => acc + (currentValue > 1 ? currentValue - 1 : 0), 0)})</p>
        </div>
      </div>
      <div className='down'>
        <div className='left'>
          <div className="c-posts-container">
            {carritos.filter(carrito => carrito.comprado === 'no').map((carrito, index) => (
              <div key={carrito.usuario_id} id={`item-${carrito.id}`}>
                <PostCarrito
                  id={carrito.id}
                  image={carrito.imagen}
                  articulo={carrito.articulo}
                  precio={carrito.precio}
                  color={carrito.color}
                  talla={carrito.talla}
                />
                <div className="eliminar-editar-postcarrito">
                <div className="p-dropdown">
                    <button className="p-Dropdown-button" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <div className="p-Dropdown-button-center">
                        <div className='p-Dropdown-button-talla'>
                          <span>{botonSeleccionado[index]}</span>
                        </div>
                        <div className='p-Dropdown-button-icon'>
                          <span><i className="bi bi-chevron-compact-down"></i></span>
                        </div>
                      </div>
                    </button>
                    <ul className="dropdown-menu">
                      <li><p className="p-dropdown-item" onClick={() => handleClick(1, index)}>1</p></li>
                      <li><p className="p-dropdown-item" onClick={() => handleClick(2, index)}>2</p></li>
                      <li><p className="p-dropdown-item" onClick={() => handleClick(3, index)}>3</p></li>
                      <li><p className="p-dropdown-item" onClick={() => handleClick(4, index)}>4</p></li>
                      <li><p className="p-dropdown-item" onClick={() => handleClick(5, index)}>5</p></li>
                    </ul>
                  </div>
                  <div className="editar-postcarrito">
                    <i className="bi bi-trash pc-iconoTrash" type="button" onClick={() => handleDelete(carrito.id)}></i>
                  </div>
                  
                  
                </div>
                <hr />
              </div>
            ))}
            <div className='Precio-bold'>
              AÑADIR CÓDIGO DE DESCUENTO  +
            </div>
          </div>
        </div>
        <div className='right'>
          <div className='resumen'>
            <div className='rows-resumen'>
              <p className='Precio-bold'>RESUMEN DE COMPRA</p>
              <p>{carritos.filter(carrito => carrito.comprado === 'no').length + botonSeleccionado.reduce((acc, currentValue) => acc + (currentValue > 1 ? currentValue - 1 : 0), 0)} Productos</p>
            </div>
            <div className='rows-resumen'>
              <p>Total parcial</p>
              <p>${totalparcial.toFixed(2)}</p>
            </div>
            <div className='rows-resumen'>
              <p>Estimado de envio</p>
              <p>{CostoEnvio}</p>
            </div>
            <div className='rows-resumen total'>
              <p>Total</p>
              <p className='Precio-bold'>${totalfinal.toFixed(2)}</p>
            </div>
            <br/><br/><br/>
            <div className='rows-resumen'>
              <p>{Envio}</p>
            </div>
            <button
              className="botonPagar"
              onClick={() => {
                const carritosNoComprados = carritos.filter(carrito => carrito.comprado === 'no');
                if (id == 1) {
                  if (carritosNoComprados.length === 0) {
                    alert("No hay productos por pagar");
                  } else {
                    alert("Inicie sesión");
                    navigate(`/LogIn`);
                  }
                } else {
                  if (carritosNoComprados.length === 0) {
                    alert("No hay productos por pagar");
                  } else {
                    const datosCompra = {
                      totalparcial,
                      totalfinal,
                      CostoEnvio,
                      cantidadProductos: carritosNoComprados.length + botonSeleccionado.reduce((acc, currentValue) => acc + (currentValue > 1 ? currentValue - 1 : 0), 0)
                    };
                    navigate(`/LeerCheckOut/${id}`, { state: datosCompra });
                  }
                }
              }}
            >
              IR A PAGAR
            </button>
          </div>
          <DropDown
            title='ENVIO '
            texto1='ENVÍO GRATIS A DOMICILIO EN PEDIDOS SUPERIORES A 599 MXN'
            texto2='Entrega en 1-10 hábiles. Si no llegas al pedido mínimo, ¡no te preocupes! son solo 65 MXN'
            texto3='Y TU ENVÍO A TIENDA, SIEMPRE GRATUITO '
            texto4='Entrega en 1-10 hábiles.'
            texto5='Ten en cuenta que los tiempos de envío pueden variar durante el período de fiestas.'
          />
          <DropDown
            title='DEVOLUCIONES '
            texto1="Dispones de un plazo de 30 días naturales a partir de la fecha en la que recibiste / recogiste tu pedido para solicitar una devolución."
            texto2='Consulta nuestra sección de Cambios y Devoluciones para saber más.'
          />
          <DropDown
            title='PAGO '
            texto1='Podrás utilizar como medio de pago cualquiera de los siguientes métodos:'
            texto2='- Visa'
            texto3='- Mastercard'
            texto4='- Amex'
            texto5='- Paynet (Pago en efectivo en 7eleven, Walmart, Farmacias del Ahorro y muchos más) Consulta aquí.'
          />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Carrito;
