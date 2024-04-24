
import React, { useState } from 'react';

import PostCheckOut from '../Components/PostCheckOut';
import PlayeraGris from '../Images/Ropa/Hombre/vegeta.jpg';
import PlayeraGris2 from '../Images/Ropa/Hombre/playera-gris-2.jpg'
import Header from '../Components/Header'


import '../Pages/CheckOut.css'; 



function CheckOut() {
  //para obtener los valores de los inputs
  const [Nombre, setNombre] = useState('');
  const handleNombre = (event) => {
    // Actualizar el estado con el nuevo valor del input
    setNombre(event.target.value);
  };

  const [Apellido, setApellido] = useState('');
  const handleApellido = (event) => {
    // Actualizar el estado con el nuevo valor del input
    setApellido(event.target.value);
  };

  const [Calle, setCalle] = useState('');
  const handleCalle = (event) => {
    // Actualizar el estado con el nuevo valor del input
    setCalle(event.target.value);
  };

  const [Num, setNum] = useState('');
  const handleNum = (event) => {
    // Actualizar el estado con el nuevo valor del input
    setNum(event.target.value);
  };

  const [CP, setCP] = useState('');
  const handleCP = (event) => {
    // Actualizar el estado con el nuevo valor del input
    setCP(event.target.value);
  };

  const [Colonia, setColonia] = useState('');
  const handleColonia = (event) => {
    // Actualizar el estado con el nuevo valor del input
    setColonia(event.target.value);
  };

  const [Ciudad, setCiudad] = useState('');
  const handleCiudadad = (event) => {
    // Actualizar el estado con el nuevo valor del input
    setCiudad(event.target.value);
  };

  const [Region, setRegion] = useState('');
  const handleRegion = (event) => {
    // Actualizar el estado con el nuevo valor del input
    setRegion(event.target.value);
  };

  
  const [Pais, setPais] = useState('');
  const handlePais = (event) => {
    // Actualizar el estado con el nuevo valor del input
    setPais(event.target.value);
  };

  const [email, setemail] = useState('');
  const handleemail = (event) => {
    // Actualizar el estado con el nuevo valor del input
    setemail(event.target.value);
  };

  const [Prefijo, setPrefijo] = useState('');
  const handlePrefijo = (event) => {
    // Actualizar el estado con el nuevo valor del input
    setPrefijo(event.target.value);
  };

  const [Tel, setTel] = useState('');
  const handleTel = (event) => {
    // Actualizar el estado con el nuevo valor del input
    setTel(event.target.value);
  };



  return (
    <div className='all-container'>
      <Header/>
      
      <div className='co-down'>
        <div className='co-Left'>

          <div>
          <h3> <b>DATOS</b>    &#10097;   ENVÍO    &#10097;   PAGO  </h3>
          </div>
          <br /> <br />

          <div>
          <h2>1. ¿PARA QUIÉN ES EL PEDIDO?</h2>
          </div>
          <br />

          <div className='grid'>
            <input className='inpuut elem-1' type="text" name="" id="" placeholder='Nombre' onChange={handleNombre}/>
            <input className='inpuut elem-2' type="text" name="" id="" placeholder='Apellido' onChange={handleApellido}/>
            <input className='inpuut elem-3' type="text" name="" id="" placeholder='Calle' onChange={handleCalle}/>
            <input className='inpuut elem-4' type="text" name="" id="" placeholder='Número' onChange={handleNum}/>
            <input className='inpuut elem-1' type="text" name="" id="" placeholder='Código Postal' onChange={handleCP}/>
            <input className='inpuut elem-2' type="text" name="" id="" placeholder='Colonia' onChange={handleColonia}/>
            <input className='inpuut elem-1' type="text" name="" id="" placeholder='Ciudad' onChange={handleCiudadad}/>
            <input className='inpuut elem-2' type="text" name="" id="" placeholder='Region' onChange={handleRegion}/>
            <input className='inpuut elem-1' type="text" name="" id="" placeholder='Pais' onChange={handlePais}/>
            <input className='inpuut elem-1' type="text" name="" id="" placeholder='Email' onChange={handleemail}/>
            <input className='inpuut elem-5' type="text" name="" id="" placeholder='Prefijo' onChange={handlePrefijo}/>
            <input className='inpuut elem-6' type="text" name="" id="" placeholder='Número de teléfono' onChange={handleTel}/>
          </div>

          <div>
            <div className='suscribir'>
              <input type="checkbox" />
              <p> Quiero suscribirme al Newsletter</p>
            </div>
            <button className={ (Nombre !== '' && Apellido !== '' && Calle !== '' && Num !== '' && CP !== '' && Region !== '' && Pais !== '' && email !== '' && Prefijo !== '' && Tel !== '') ? "btn-Continuar-si" : " btn-Continuar"}>
              GUARDAR Y CONTINUAR
              
            </button>

            

          </div>

        </div>



        <div className='co-right'>

          <div className='pedido'>
            <div className='rows-pedido'>
              <h3><b>PEDIDO</b></h3>
              <p>2 productos</p>
            </div>

            <div>
              
              <PostCheckOut
               image={PlayeraGris}
               articulo='Camisa Manga larga Oxford Tipo Lino'
               precio='150'
               color='Gris'
               talla='CH'
              />

              <PostCheckOut
              image={PlayeraGris2}
              articulo='Camisa'
              precio='150'
              color='Gris'
              talla='G'
              />
              
            </div>


            <div  className='rows-pedido'>
              <p>Subtotal</p>
              <p>$628.00</p>
            </div>

            <div  className='rows-pedido'>
              <p>Envío (Precio estimado)</p>
              <p>Gratis</p>
            </div>

            <div  className='rows-pedido techo'>
              <div>
                <p>Total</p>
              </div>
              
              <p> <b>628.00</b> </p>
            </div>

          </div>



        </div>


      </div>
      



    </div>
  )
}

export default CheckOut
