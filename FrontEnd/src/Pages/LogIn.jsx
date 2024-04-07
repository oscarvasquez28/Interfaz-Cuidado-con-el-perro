import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';
import './SignIn.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function SignIn() {
  const [showPass, setShowPass] = useState(false);
  const [values, setValues] = useState({
    correo: '',
    contraseña: ''
  });

  // Manejar cambios en los campos del formulario
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8081/Log', values)
      .then(res => {
        console.log(res);
        // Verificar si la respuesta contiene los datos del usuario
        if (res.data.length > 0) {
          // Si se encontró al usuario, redirigir al dashboard u otra página
          navigate('/');
        } else {
          // Si no se encontró al usuario, mostrar un mensaje de error o tomar otra acción
          console.log('Usuario no encontrado');
          alert("Usuario no encontrado");
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <div className='LogIn-container'>
        <header className='header'>
          <Header/>
        </header>
        <div className='both-sides'> 
          <div className='left-side'>
            <div className='general'>
              <div className='general-title'>
                <h2 className='right-side-subtitle'>
                  ENTRA EN TU CUENTA
                </h2>            
              </div>
              <form onSubmit={handleSubmit}>
                <div>
                  <input type="text" className='email-subscribe-si' placeholder='Email' name="correo" value={values.correo} onChange={handleChange}/>
                </div>
                <div className=''>        
                  <div className='pass-input'>
                    <input type={showPass ? "text" : "password"} className='email-subscribe-si' placeholder='Contraseña' name="contraseña" value={values.contraseña} onChange={handleChange}/>
                    <div className='pass-icon' onClick={() => setShowPass(!showPass)}>
                      {showPass ? <i className="bi bi-eye"></i> : <i className="bi bi-eye-slash"></i>}
                    </div>
                  </div>   
                </div>  
                <div>
                  <button className="btn-unirse-si" type='submit'>INICIAR SESIÓN</button>
                </div> 
              </form>                
              <div>
                <p className='or-reset-pass'>¿OLVIDASTE TU CONTRASEÑA?</p>
              </div>         
            </div>        
          </div>
          <div className='right-side'>
            <h3 className='right-side-subtitle'>
              ¿NO TIENES CUENTA?<br />
              REGÍSTRATE Y HAZ TUS COMPRAS MÁS RÁPIDO.
            </h3>
            <div>
              <Link to ="/SignIn"><button className='btn-create-si'>CREAR CUENTA</button></Link>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default SignIn;
