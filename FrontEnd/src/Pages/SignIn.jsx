import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom'
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
    setValues({...values, contraseña: event.target.value});
    console.log(values); // Imprime el objeto values actualizado después de cambiar la contraseña
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

  const [values, setValues ] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    contraseña: ''
  })
  const navigate = useNavigate();
  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     axios.post('http://localhost:8081/usuarios' , values)
  //     .then(res => {
  //         console.log(res);
  //         navigate('/')
  //     })
  //     .catch(err => console.log(err))
  // }
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Verifica si las contraseñas son iguales
    if (values.contraseña !== repPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    
    // Si las contraseñas coinciden, puedes continuar con tu lógica de envío de formulario
    axios.post('http://localhost:8081/usuarios' , values)
      .then(res => {
          console.log(res);
          navigate('/')
      })
      .catch(err => console.log(err))
  };

    return (

      <div>
        <header className='header'>
          <Header/>
        </header>
        <div className='header-general'>

          <div>
            <h2 className='right-side-subtitle-h2'>
              CREAR TU CUENTA
            </h2>
            <p>Ingresa tus datos para que seas parte de CCP</p>
          </div> 

          <form onSubmit={handleSubmit}>
            <div className='names'>

              <input type="text" className='email-subscribe-li' placeholder='Nombre' onChange={e => setValues({...values, nombre: e.target.value})} required/>

              <input type="text" className='email-subscribe-li' placeholder='Apellido' onChange={e => setValues({...values, apellido: e.target.value})} required/>

            </div>

            <div>
              <input type="text" className='eemail-subscribe-li' placeholder='Email' onChange={e => setValues({...values, correo: e.target.value})} required/>        
            </div>
            
            <div className='pass-inputs'>        
              
              <div className='pass-input input-container'>
                <input type={ showPass ? "text" : "password"} className='email-subscribe-li' placeholder='Contraseña' 
                minLength="8" maxLength="20" onChange={e => setValues({...values, contraseña: e.target.value})} required/>
                  
                <div className='pass-icon-li' onClick={() => setShowPass(!showPass)} required>
                  {showPass ? <i className="bi bi-eye"></i> : <i className="bi bi-eye-slash"></i>} 
                </div>

              </div>   
              
              <div className='pass-input input-container'>
                <input type={ showPass ? "text" : "password"} className='email-subscribe-li' placeholder='Repetir Contraseña'
                minLength="8" maxLength="20" value={repPassword} onChange={handleRepPassChange}/>
                  
                <div className='pass-icon-li' onClick={() => setShowPass(!showPass)}>
                  {showPass ? <i className="bi bi-eye"></i> : <i className="bi bi-eye-slash"></i>}
                </div>

              </div>               
            </div>

            <div className=''>
              {/* <p> */}
                <ul className='pass-char'>
                  <li>Combina mayúsculas con minúsculas</li>
                  <li>Ingresa de 8 a 20 caracteres. </li>
                  <li>Agrega por lo menos un número o símbolo..</li>
                </ul>           
              {/* </p> */}
            </div>

            <div className='want-suscribe'>
              <input className='check-accept' type="checkbox" id='checkbox'  checked={isChecked} onChange={handleCheckboxChange}/>                    
              <p className='links'>Quiero suscribirme a la newsletter</p> 
            </div>

            <div>
              <p className='links'>Al presionar “Crear cuenta” acepto el <u id='link-pointer'>Aviso de Privacidad</u> y <u id='link-pointer'>Cookies</u> </p>
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