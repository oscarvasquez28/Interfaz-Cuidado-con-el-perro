import React, { useState } from 'react';
import './SignIn.css';

// import bfooter from '../Images/Footer/background-footer.jpg'

function SignIn(){
  const [showPass, setShowPass] = useState(false)
    return (

      <div className='both-sides'> 
        
        <div className='left-side'>
          <div className='general'>

            <div className='title'>
              <h2>
                ENTRA A TU CUENTA
              </h2>            
            </div> 

            <div className=''>
              <input type="text" className='email-subscribe-si' placeholder='Email' />
            </div>

            <div className=''>        
              <div className='pass-input'>
                <input type={ showPass ? "text" : "password"}       className='email-subscribe-si' placeholder='Contraseña' />

                <div className='pass-icon' onClick={() => setShowPass(!showPass)}>
                  {showPass ? <i class="bi bi-eye"></i> : <i class="bi bi-eye-slash"></i>}
                </div>


              </div>   
                
            </div>  

            <div>
              <button className='btn-unirse-si'>INICIAR SESIÓN</button>
            </div>   

            <div>
            <p className='or-reset-pass'>¿OLVISASTE TU CONTRASEÑA?</p>
          </div>
          
          </div>

         
        </div>

        <div className='right-side'>
          <h3>
            ¿NO TIENES CUENTA?<br />
            REGÍSTRATE Y HAZ TUS COMPRAS MÁS RÁPIDO.
          </h3>

          <div>
            <button className='btn-create-si'>CREAR CUENTA</button>
          </div>

        </div>

      </div>
      


    );
}

export default SignIn;