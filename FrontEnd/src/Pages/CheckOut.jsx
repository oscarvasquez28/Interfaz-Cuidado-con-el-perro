import axios from 'axios';
import React, { useEffect,useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import PostCheckOut from '../Components/PostCheckOut';
import PlayeraGris from '../Images/Ropa/Hombre/vegeta.jpg';
import PlayeraGris2 from '../Images/Ropa/Hombre/playera-gris-2.jpg'
import Header from '../Components/Header'


import '../Pages/CheckOut.css'; 



function CheckOut() {

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
    axios.get(`http://localhost:8081/LeerCheckOut/${id}`)
        .then(res => {
            console.log(res);
            setCarritos(res.data); // Se asigna la lista completa de carritos
        })
        .catch(err => console.log(err));
}, [id]);


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

  function handleClick() {
    if (document.querySelector('.btn-Continuar-si')) {
      // alert('¡Se guardó y continuó!');
    } else if (document.querySelector('.btn-Continuar')) {
      alert('¡Por favor complete todos los campos antes de continuar!');
    }
  }



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
            {/* <button className={ (Nombre !== '' && Apellido !== '' && Calle !== '' && Num !== '' && CP !== '' && Region !== '' && Pais !== '' && email !== '' && Prefijo !== '' && Tel !== '') ? "btn-Continuar-si" : " btn-Continuar"}>
              GUARDAR Y CONTINUAR
            </button> */}
            {/*ventana modal*/}
            <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Método de Pago</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    Show a second modal and hide this one with the button below.
                  </div>
                  <div class="modal-footer">
                    <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Continuar</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">Datos de la tarjeta</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                  <div className="rows-modals-pago">
                    <div className="First-row-modal-pago">
                      <div class="row">
                        <div class="col">
                          <input type="text" className="form-control" placeholder="Número de tarjeta de crédito" aria-label="Número de tarjeta de crédito"
                          maxLength="16"
                          pattern="\d*"
                          title="Por favor ingrese solo números"
                          onChange={(e) => {
                            const inputValue = e.target.value.replace(/\D/g, ''); // Remover caracteres que no sean dígitos
                            if (inputValue.length > 16) {
                              e.target.value = inputValue.slice(0, 16); // Limitar la longitud a 16 dígitos
                            } else {
                              e.target.value = inputValue;
                            }
                          }}/>
                        </div>
                        <div class="col">
                        <input type="text" className="form-control" placeholder="Titular de tarjeta" aria-label="Titular de tarjeta"
                        onInput={(e) => {
                          e.target.value = e.target.value.replace(/[^a-zA-Z\sÑñ]/g, '');
                        }}/>
                        </div>
                      </div>
                    </div>
                    <div className="Second-row-modal-pago">
                      <div class="row">
                        <div class="col">
                          <input type="month" class="form-control" placeholder="Expiración (MM/AA)" aria-label="Expiración (MM/AA)"/>
                        </div>
                        <div class="col">
                        <input type="number" className="form-control" placeholder="CVV" aria-label="CVV"
                          maxLength="3"
                          onInput={(e) => {
                            e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,3)
                          }}/>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                  <div class="modal-footer">
                    <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Pagar</button>
                  </div>
                </div>
              </div>
            </div>

            {/* <button 
              className={ (Nombre !== '' && Apellido !== '' && Calle !== '' && Num !== '' && CP !== '' && Region !== '' && Pais !== '' && email !== '' && Prefijo !== '' && Tel !== '') ? "btn-Continuar-si" : "btn-Continuar"} 
              onClick={handleClick}
              {...(Nombre !== '' && Apellido !== '' && Calle !== '' && Num !== '' && CP !== '' && Region !== '' && Pais !== '' && email !== '' && Prefijo !== '' && Tel !== '' && {'data-bs-target': '#exampleModalToggle', 'data-bs-toggle': 'modal'})}
              >
              GUARDAR Y CONTINUAR
            </button> */}
            <button 
              className={ (Nombre !== '' && Apellido !== '' && Calle !== '' && Num !== '' && CP !== '' && Region !== '' && Pais !== '' && email !== '' && Prefijo !== '' && Tel !== '') ? "btn-Continuar-si" : "btn-Continuar"} 
              {...(Nombre !== '' && Apellido !== '' && Calle !== '' && Num !== '' && CP !== '' && Region !== '' && Pais !== '' && email !== '' && Prefijo !== '' && Tel !== '' && {'data-bs-target': '#exampleModalToggle', 'data-bs-toggle': 'modal'})}
              onClick={() => {
                if (carritos.length > 0) {
                  // Aquí colocas la lógica para guardar y continuar
                  handleClick();
                } else {
                  alert("No hay productos en el carrito para comprar.");
                }
              }}
            >
              GUARDAR Y CONTINUAR
            </button>

            
          </div>

        </div>



        <div className='co-right'>

          <div className='pedido'>
            <div className='rows-pedido'>
              <h3><b>PEDIDO</b></h3>
              <p>{carritos.length} productos</p>
            </div>

            <div>
            {carritos.map(carrito => (
                        <div key={carrito.usuario_id}>
                          <PostCheckOut
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
            </div>


            <div  className='rows-pedido'>
              <p>Subtotal</p>
              <p>${totalparcial.toFixed(2)}</p>
            </div>

            <div  className='rows-pedido'>
              <p>Envío (Precio estimado)</p>
              <p>{CostoEnvio}</p>
            </div>

            <div  className='rows-pedido techo'>
              <div>
                <p>Total</p>
              </div>
              
              <p> <b>${totalfinal.toFixed(2)}</b> </p>
            </div>

          </div>



        </div>


      </div>
      



    </div>
  )
}

export default CheckOut
