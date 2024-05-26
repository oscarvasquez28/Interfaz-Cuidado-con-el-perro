import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import UserContext from '../Context/UserContext'; // Importa el contexto
import QR from '../Images/qr.png'
import QR2 from '../Images/QR2.jpg'

import '../Pages/Agradecimiento.css'
function Agradecimiento() {
    const { userData } = useContext(UserContext); // Cambia username a userData
    const userId = userData.id; // Obtén el ID del contexto de usuario
    const username = userData.username;
    const ahora = new Date();
    const dia = ahora.getDate();
    const mes = ahora.getMonth() + 1;
    const año = ahora.getFullYear();

    function generarNumeroAleatorio() {
        let numero = '';
        const caracteres = '0123456789'; // Caracteres que se usarán para generar el número
        
        for (let i = 0; i < 16; i++) {
          const indice = Math.floor(Math.random() * caracteres.length);
          numero += caracteres.charAt(indice);
        }
        
        return numero;
      }
      
      const numeroAleatorio = generarNumeroAleatorio();
  return (
    <div>
        <Header/>
        <div className='Container-agradecimiento'>

            <div className="datos-container">
                <div className="title-container">
                    <h1>PEDIDO REALIZADO</h1>
                </div>
                <div className="row-container">
                    <div className="column-left">
                    <h4>FECHA DE PEDIDO</h4>
                    </div>
                    <div className="column-right">
                    <h5>{dia}/{mes}/{año}</h5>
                    </div>
                </div>
                <div className="row-container">
                    <div className="column-left">
                    <h4>REFERENCIA DE PAGO</h4>
                    </div>
                    <div className="column-right">
                    <h5>{numeroAleatorio}</h5>
                    </div>
                </div>
                <div className="row-container">
                    <div className="column-left">
                    <h4>LUGAR DE ENTREGA</h4>
                    </div>
                    <div className="column-right">
                    <h5>DOMICILIO</h5>
                    </div>
                </div>
                {/* <div className="row-container">
                    <div className="column-left">
                    <h4>DIRECCIÓN DE FACTURACIÓN</h4>
                    </div>
                    <div className="column-right">
                    <h5>Dirección con props</h5>
                    </div>
                </div> */}
                <div className="row-container">
                    <div className="column-left">
                    <h4>PAGADO CON</h4>
                    </div>
                    <div className="column-right">
                    <h5>Tarjeta</h5>
                    </div>
                </div>
                {/* <div className="row-container">
                    <div className="column-left">
                    <h1>Usuario: {username}</h1>
                    </div>
                    <div className="column-right">
                    <h1>ID: {userId}</h1>
                    </div>
                </div> */}
                <div className="row-container" id='row-container-button'>
                <Link to ="/"><button className='row-container-button-style'>Regresar</button></Link>
                    
                </div>
                
            </div>
            <div className="seguimiento-container">
                <div className="title-container">
                <h1>Seguimiento</h1>
                </div>
                <div className="row-container">
                    <div className="column-left">
                    <h4>FECHA DE ENTREGA ESTIMADA</h4>
                    </div>
                    <div className="column-right">
                    <h5>{dia+3}/{mes}/{año}</h5>
                    </div>
                </div>
                <div className="row-container" id='row-container-bordernone'>
                    <div className="column-left">
                    <h4>VER SEGUIMIENTO DEL PEDIDO</h4>
                    </div>
                </div>
                <div className="row-container" id='row-container-bordernone'>
                    <img src={QR2} className='container-qr' />
                </div>
            </div>   
        </div>
        
    </div>
  )
}

export default Agradecimiento