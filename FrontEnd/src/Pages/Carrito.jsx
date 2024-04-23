import React from 'react'


import PlayeraGris from '../Images/Ropa/Hombre/vegeta.jpg';
import PlayeraGris2 from '../Images/Ropa/Hombre/playera-gris-2.jpg'
import Header from '../Components/Header'
import DropDown from '../Components/DropDown';
import PostCarrito from '../Components/PostCarrito';
import CheckOut from './CheckOut';

import '../Pages/Carrito.css'; 


function Carrito() {
  const handleClick = () => {
    // Abrir una nueva ventana con la URL deseada
    window.open('/CheckOut', '_blank');
  };

  return (
    <div className='all-container'>
      
      <Header/>

      <div className='up'>
        <div>
          <p className='title-muted'> FAVORITOS (0) </p>
          
          <p className='title'> CARRITO (2)</p>
        </div>

      </div>

      <div className='down'>

        <div className='left'>
          <div className="posts-container">
            <PostCarrito
              image={PlayeraGris}
              articulo='Camisa Manga larga Oxford Tipo Lino'
              precio='150'
              color='Gris'
              talla='CH'
            />

            <PostCarrito
              image={PlayeraGris2}
              articulo='Camisa'
              precio='150'
              color='Gris'
              talla='G'
            /> 

            <PostCarrito
              image={PlayeraGris2}
              articulo='Camisa 2'
              precio='15805'
              color='Gris'
              talla='G'
            /> 

            <div className='Precio-bold'>
              AÑADIR CÓDIGO DE DESCUENTO  +
            </div>

          </div>

        </div>



        <div className='right'>

          <div className='resumen'>
            <div className='rows-resumen'>
              <p className='Precio-bold'>RESUMEN DE COMPRA</p>
              <p> 2 Productos</p>
            </div>

            <div className='rows-resumen' >
              <p>Total parcial</p>
              <p>$628.00</p>
            </div>

            <div className='rows-resumen'>
              <p>Estimado de envio</p>
              <p>Gratis</p>
            </div>

            <div className='rows-resumen total'>
              <p>Total</p>
              <p className='Precio-bold'>$628.00</p>
            </div>


            <br/><br/><br/>

            <div className='rows-resumen'>
              <p>Envio gratuito</p>
             
            </div>

            <button className='botonPagar'
            onClick={handleClick}>
             IR A PAGAR
            </button>

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