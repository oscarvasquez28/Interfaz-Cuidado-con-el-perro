import React, { useState } from 'react';
import './SignIn.css';
import Header from '../Components/Header'
import Footer from '../Components/Footer'

// import bfooter from '../Images/Footer/background-footer.jpg'

function SignIn(){
  const [showPass, setShowPass] = useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Actualiza las variables si se modifica el input
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  
    return (
      <div>

        <header className='header'>
          <Header/>
        </header>
        
        <div className='both-sides'> 

          <div className='left-side'>
            <div className='general'>

              <div className='general-title'>
                <h2 className='right-side-subtitle'>
                  ENTRA A TU CUENTA
                </h2>            
              </div>

              <form action=""> {/* aqui empieza el forms-----------*/}

                <div className=''>
                  <input type="text" className='email-subscribe-si' placeholder='Email' value={email} onChange={handleEmailChange}/>
                </div>

                <div className=''>        
                  <div className='pass-input'>
                    <input type={ showPass ? "text" : "password"}       className='email-subscribe-si' placeholder='Contraseña' value={password} 
                    onChange={handlePasswordChange}/>

                    <div className='pass-icon' onClick={() => setShowPass (!showPass)}>
                    {showPass ? <i class="bi bi-eye"></i> : <i class="bi bi-eye-slash"></i>}
                    </div>

                  </div>   
                </div>  

                <div>
                  <button className={ (password !== '' && email !== '') ? "btn-create-si" : "btn-unirse-si"} type='submit'>INICIAR SESIÓN</button>
                </div> 
              </form>                

              <div>
                <p className='or-reset-pass'>¿OLVISASTE TU CONTRASEÑA?</p>
              </div>
            
            </div>
          
          </div>

          <div className='right-side'>
            <h3 className='right-side-subtitle'>
              ¿NO TIENES CUENTA?<br />
              REGÍSTRATE Y HAZ TUS COMPRAS MÁS RÁPIDO.
            </h3>

            <div>
              <button className='btn-create-si'>CREAR CUENTA</button>
            </div>
          </div>
        </div>

        <Footer/>

      </div>

    );
}

export default SignIn;