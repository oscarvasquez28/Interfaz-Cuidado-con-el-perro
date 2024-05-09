import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import PlayeraGris from '../Images/Ropa/Hombre/vegeta.jpg';
import PlayeraGris2 from '../Images/Ropa/Hombre/playera-gris-2.jpg'
import Header from '../Components/Header'
import DropDown from '../Components/DropDown';
import PostCarrito from '../Components/PostCarrito';
import CheckOut from './CheckOut';

import '../Pages/Carrito.css'; 


function Carrito() {

  const { id } = useParams();
  const [carritos, setCarritos] = useState([]);
  let totalparcial = 0;
  let totalfinal = 0;
  let CostoEnvio = 'Gratis';

  for (let carrito of carritos) {
    totalparcial += parseFloat(carrito.precio);
  }

  if(totalparcial >= 599){
    CostoEnvio = 'Gratis';
    totalfinal = totalparcial;
  }else{
    if(carritos.length>0)
      {
        CostoEnvio = '$65'
        totalfinal = totalparcial + 65;
      }
  }


  useEffect(() => {
      axios.get(`http://localhost:8081/LeerCarrito/${id}`)
          .then(res => {
              console.log(res);
              setCarritos(res.data); // Se asigna la lista completa de carritos
          })
          .catch(err => console.log(err));
  }, [id]);

  return (
    <div className='all-container'>
      
      <Header/>

      <div className='up'>
        <div>
          <p className='title-muted'> FAVORITOS (0) </p>
          
          <p className='title'> CARRITO ({carritos.length})</p>
        </div>

      </div>

      <div className='down'>

        <div className='left'>
          <div className="c-posts-container">
          {carritos.map(carrito => (
                        <div key={carrito.usuario_id}>
                          <PostCarrito
                            image={carrito.imagen}
                            articulo={carrito.articulo}
                            precio={carrito.precio}
                            color={carrito.color}
                            talla={carrito.talla}
                          />
                          <hr /> {/* Línea divisoria entre cada carrito */}
                        </div>
                        
                    ))
            }

            <div className='Precio-bold'>
              AÑADIR CÓDIGO DE DESCUENTO  +
            </div>

          </div>

        </div>



        <div className='right'>

          <div className='resumen'>
            <div className='rows-resumen'>
              <p className='Precio-bold'>RESUMEN DE COMPRA</p>
              <p> {carritos.length} Productos</p>
            </div>

            <div className='rows-resumen' >
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
              <p>Envio gratuito</p>
             
            </div>
            <Link to ="/CheckOut"><button className='botonPagar'
            // onClick={handleClick}
            >
             IR A PAGAR
            </button></Link>


          </div>

          <DropDown
          title='ENVIO '
          texto1='ENVÍO GRATIS A DOMICILIO EN PEDIDOS SUPERIORES A 599 MXN'
          texto2='Entrega en 1-10 hábiles. Si no llegas al pedido mínimo, ¡no te preocupes! son solo 65 MXN'
          texto3='Y TU ENVÍO A TIENDA, SIEMPRE GRATUITO '
          texto4='Entrega en 1-10 hábiles. '
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
          texto5='- Paynet (Pago en efectivo en 7eleven, Walmart, Farmacias del Ahorro y muchos más) Consulta aquí.'
          />      

        </div>



 
      </div>
        
    </div>
  )
}

export default Carrito