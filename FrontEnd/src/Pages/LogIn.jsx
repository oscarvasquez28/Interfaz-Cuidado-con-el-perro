import React, { useState } from 'react';
import './LogIn.css';
import Header from '../Components/Header'

// import bfooter from '../Images/Footer/background-footer.jpg'

function LogIn(){
  const [showPass, setShowPass] = useState(false)
    return (

      <div>
        <header className='header'>
          <Header/>
        </header>
        <div className='general'>

          <div className='title'>
            <h1>
              CREA TU CUENTA
            </h1>
            <p>Ingresa tus datos para que seas parte de CCP</p>
          </div> 

          <div className=''>
            <input type="text" className='email-subscribe-li' placeholder='Nombre' />
            <input type="text" className='email-subscribe-li' placeholder='Apellido' />          
          </div>

          <div>
            <input type="text" className='eemail-subscribe-li' placeholder='Email' />        
          </div>
          
          <div className='pass-inputs'>        
            
            <div className='pass-input input-container'>
              <input type={ showPass ? "text" : "password"}       className='email-subscribe-li' placeholder='Contraseña' 
              minlength="8" maxlength="20"/>
                
              <div className='pass-icon-li' onClick={() => setShowPass(!showPass)}>
                {showPass ? <i class="bi bi-eye"></i> : <i class="bi bi-eye-slash"></i>}
              </div>

            </div>   
            
            <div className='pass-input input-container'>
              <input type={ showPass ? "text" : "password"}       className='email-subscribe-li' placeholder='Repetir Contraseña'
              minlength="8" maxlength="20" />
                
              <div className='pass-icon-li' onClick={() => setShowPass(!showPass)}>
                {showPass ? <i class="bi bi-eye"></i> : <i class="bi bi-eye-slash"></i>}
              </div>

            </div>               
          </div>

          <div className=''>
            <p>
              <ul className='pass-char'>
                <li>Combina mayúsculas con minúsculas</li>
                <li>Ingresa de 8 a 20 caracteres. </li>
                <li>Agrega por lo menos un número o símbolo..</li>
              </ul>           
            </p>
          </div>

          <div className='want-suscribe'>
            <input className='check-accept' type="checkbox" id='checkbox'  />                    
            <p className='links'>Quiero suscribirme a la newsletter</p> 
          </div>

          <div>
            <p className='links'>Al presionar “Crear cuenta” acepto el <u>Aviso de Privacidad</u> y <u>Cookies</u> </p>
          </div>

          <div>
            <button className='btn-unirse-li'>CREAR CUENTA</button>
          </div>

          <div>
            <p className='or-signin'>¿YA TIENES UNA CUENTA? INICIA SESIÓN</p>
          </div>

        </div>

      </div>  

    );
}

export default LogIn;