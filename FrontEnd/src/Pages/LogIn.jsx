import axios from 'axios';
import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './SignIn.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import UserContext from '../Context/UserContext'; // Importa el contexto

function SignIn() {
  // const [carritos, setCarritos] = useState([]);

  const { setUser } = useContext(UserContext); // Cambia setUsername a setUser
  const { userData } = useContext(UserContext); // Cambia username a userData
  const userId = userData.id; // Obtén el ID del contexto de usuario
  const username = userData.username;
  
  const [showPass, setShowPass] = useState(false);
  const [values, setValues] = useState({
    correo: '',
    contraseña: ''
  });

  const [formComplete, setFormComplete] = useState(false); // Estado para rastrear si los campos están completos

  useEffect(() => {
    // Verifica si todos los campos están llenos
    const isFormComplete = Object.values(values).every(value => value !== '');
    setFormComplete(isFormComplete);
  }, [values]);

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
          console.log(res.data[0].nombre);
          const userId2 = res.data[0].id; // Añadir la obtención del ID
          const username2 = res.data[0].nombre;
          setUser(userId2, username2); // Establecer tanto el ID como el nombre de usuario
          alert(`Bienvenido, ${username2}!`);
          handleUpdate(userId2);
          navigate('/');
          
        } else {
          // Si no se encontró al usuario, mostrar un mensaje de error o tomar otra acción
          console.log('Usuario no encontrado');
          alert("Usuario no encontrado");
        }
      })
      .catch(err => console.log(err));
  };


  const handleUpdate = (userId) => {
    // const { userData } = useContext(UserContext); // Cambia username a userData
    // const userId3 = userData.id; // Obtén el ID del contexto de usuario
    axios.post('http://localhost:8081/UpdateCarritoId', { id: userId })
        .then(response => {
            console.log(response);
            // alert("Los artículos fueron comprados");
            // alert(userId);
            // Realiza alguna acción adicional si es necesario
        })
        .catch(error => {
            console.error(error);
            alert("Hubo un error al intentar añadir los artículos a su carrito");
        });
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
                  ENTRAR EN TU CUENTA
                </h2>            
              </div>
              <form onSubmit={handleSubmit}>
                <div>
                  <input type="text" className='email-subscribe-si' placeholder='Email' name="correo" value={values.correo} onChange={handleChange} required/>
                </div>
                <div className=''>        
                  <div className='pass-input'>
                    <input type={showPass ? "text" : "password"} className='email-subscribe-si' placeholder='Contraseña' name="contraseña" value={values.contraseña} onChange={handleChange} required/>
                    <div className='pass-icon' onClick={() => setShowPass(!showPass)}>
                      {showPass ? <i className="bi bi-eye"></i> : <i className="bi bi-eye-slash"></i>}
                    </div>
                  </div>   
                </div>  
                <div>
                <button className={`btn-unirse ${formComplete ? 'btn-unirse-si' : 'btn-unirse-no'}`} type='submit' disabled={!formComplete}>INICIAR SESIÓN</button>
                </div> 
              </form>                
              <div>
                <p className='or-reset-pass'>RECUPERAR CONTRASEÑA</p>
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
      {/* <Footer/> */}
    </div>
  );
}

export default SignIn;
