import React, { useState } from 'react';
import './LogIn.css';
import Header from '../Components/Header'
import Footer from '../Components/Footer'

// import bfooter from '../Images/Footer/background-footer.jpg'

function LogIn(){
  const [showPass, setShowPass] = useState(false)
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repPassword, setRepPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

 

  // Actualiza las variables si se modifica el input
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleRepPassChange = (event) => {
    setRepPassword(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // invierte el estado del checkbox
  };



    return (

      <div>
        <header className='header'>
          <Header/>
        </header>
        <div className='header-general'>

          <div>
            <h2 className='right-side-subtitle-h2'>
              CREA TU CUENTA
            </h2>
            <p>Ingresa tus datos para que seas parte de CCP</p>
          </div> 

          <form action="">
            <div className='names'>

              <input type="text" className='email-subscribe-li' placeholder='Nombre' value={name} onChange={handleNameChange}/>

              <input type="text" className='email-subscribe-li' placeholder='Apellido' value={lastName} onChange={handleLastNameChange} />

            </div>

            <div>
              <input type="text" className='eemail-subscribe-li' placeholder='Email' value={email} onChange={handleEmailChange}/>        
            </div>
            
            <div className='pass-inputs'>        
              
              <div className='pass-input input-container'>
                <input type={ showPass ? "text" : "password"}       className='email-subscribe-li' placeholder='Contraseña' 
                minlength="8" maxlength="20" value={password} onChange={handlePasswordChange}/>
                  
                <div className='pass-icon-li' onClick={() => setShowPass(!showPass)}>
                  {showPass ? <i className="bi bi-eye"></i> : <i className="bi bi-eye-slash"></i>}
                </div>

              </div>   
              
              <div className='pass-input input-container'>
                <input type={ showPass ? "text" : "password"}       className='email-subscribe-li' placeholder='Repetir Contraseña'
                minlength="8" maxlength="20" value={repPassword} onChange={handleRepPassChange} />
                  
                <div className='pass-icon-li' onClick={() => setShowPass(!showPass)}>
                  {showPass ? <i className="bi bi-eye"></i> : <i className="bi bi-eye-slash"></i>}
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
              <input className='check-accept' type="checkbox" id='checkbox'  checked={isChecked} onChange={handleCheckboxChange}/>                    
              <p className='links'>Quiero suscribirme a la newsletter</p> 
            </div>

            <div>
              <p className='links'>Al presionar “Crear cuenta” acepto el <u>Aviso de Privacidad</u> y <u>Cookies</u> </p>
            </div>

            <div>
              <button className={ (password !== '' && email !== '' && name !== '' && lastName !== '' && repPassword !== '') ? "btn-create-li" : "btn-unirse-li"} type='submit'>CREAR CUENTA</button>
            </div>

          </form>
          

          <div>
            <p className='or-signin'>¿YA TIENES UNA CUENTA? INICIA SESIÓN</p>
          </div>

        </div>
        <div>
          <Footer/>
        </div>

      </div>  

    );
}

export default LogIn;