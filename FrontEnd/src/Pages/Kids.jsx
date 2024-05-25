import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import './Mujer.css';
import Header from '../Components/Header';
import Post from '../Components/Post';
import Footer from '../Components/Footer'


function Kids() {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8081/LeerProducto`)
        .then(res => {
            console.log(res);
            setProductos(res.data); // Se asigna la lista completa de carritos
        })
        .catch(err => console.log(err));
}, []);

  const [isCollapsed, setIsCollapsed] = useState(true);
  const [showAllButton, setShowAllButton] = useState(true);
  const mujerContainerRef = useRef(null);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    setShowAllButton(!isCollapsed); // Alternar el estado del botón "Ver Todo" al hacer clic

    if (!isCollapsed) {
      mujerContainerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    $('.Second-Dashboard-button').hover(
      function() {
        // Cuando el mouse entra en el botón
        $(this).css('background', 'rgb(66, 66, 66, 0.2)'); // Cambia el color de fondo a gris con 0.2 de opacidad
      },
      function() {
        // Cuando el mouse sale del botón
        $(this).css('background', ''); // Restaura el color de fondo por defecto
      }
    );
  }, []); // Se ejecuta solo una vez al montar el componente

  return (
    <div ref={mujerContainerRef} className='Mujer-Container-All-page'>
      <Header />
      <div className="Mujer-Container">
        <div className="Mujer-Container-Dashboard-All">
          <div className="Mujer-Container-Dashboard">
            <div className="Mujer-Container-Dashboard-Subtitle">
              <span><h3 className='Container-Dashboard-Subtitle-h3'>LOS MÁS</h3></span>
              <span><h2 className='Container-Dashboard-Subtitle-h2'>VENDIDOS DE NIÑOS</h2></span>
            </div>
            <div className="Mujer-Container-Dashboard-Posts">

              {productos.filter(producto => producto.ubicación == 'KidsDashboard').map(producto => (
              <div className="Mujer-Container-Dashboard-Posts" key={producto.id}>
                <Post
                imagen={producto.imagenProducto}
                imagenHover={producto.imagenProductoHover}
                articulo={producto.nombreProducto}
                precio={producto.precioProducto}
                color={producto.colorProducto}
                />
              </div>
              ))}

            </div>
          </div>
          <div className="Mujer-Container-Dashboard-Second">
            <p className="Dashboard-button-center">
              {showAllButton && (
                <button
                  className="Dashboard-button"
                  onClick={toggleCollapse}
                  data-bs-toggle="collapse"
                  href="#collapseExample"
                  role="button"
                  aria-expanded={!isCollapsed}
                  aria-controls="collapseExample"
                >
                  VER TODO
                </button>
              )}
            </p>
            <div className={`collapse ${isCollapsed ? 'hide' : ''}`} id="collapseExample">
              <div className="card card-body">
                <div className="ArreglarBootstrap-Container">

                  {productos.filter(producto => producto.ubicación == 'KidsDashboardHide').map(producto => (
                  <div className="ArreglarBootstrap-Container" key={producto.id}>
                    <div className="ArreglarBootstrap">
                    <Post
                    imagen={producto.imagenProducto}
                    imagenHover={producto.imagenProductoHover}
                    articulo={producto.nombreProducto}
                    precio={producto.precioProducto}
                    color={producto.colorProducto}
                    />
                    </div>
                  </div>
                  ))}

                </div>
              </div>
              <p className="Dashboard-button-center">
              {!showAllButton && (
                <button
                  className="Dashboard-button"
                  onClick={toggleCollapse}
                  data-bs-toggle="collapse"
                  href="#collapseExample"
                  role="button"
                  aria-expanded={!isCollapsed}
                  aria-controls="collapseExample"
                >
                  OCULTAR
                </button>
              )}
              </p>
            </div>
          </div>
        </div>
        
      <div className='Second-Dashboard'>
        <div className='Second-Dashboard-title'>
          <h1>ARMAR TU CONJUNTO</h1>
        </div>
        <div className="container-Second-Dashboard">
          <div className="row" id='row-ninos'>

            <div className="col-12 col-lg-3 col-md-3 col-sm-6 col-xs-6">
              <div className="container-Second-Dashboard-img">
              <div class="card text-bg-dark">
                <img src={'https://image.hm.com/assets/hm/8f/c9/8fc9d95d3e1ada014c19a03341c1055d1ed7e09e.jpg?imwidth=396'} 
                class="card-img-kids " alt="..."/>
                <div class="card-img-overlay">
                  <div className="card-img-overlay-div">
                  <h5 class="card-title">Casual</h5>
                  </div>                
                </div>
              </div>
              </div>
            </div>

            <div className="col-12 col-lg-3 col-md-3 col-sm-6 col-xs-6">
              <div className="container-Second-Dashboard-img">
              <div class="card text-bg-dark">
                <img src={'https://image.hm.com/assets/hm/ee/fb/eefb58f16bf251b129956d3ca4026f916895adb9.jpg?imwidth=396'}
                 class="card-img-kids " alt="..."/>
                <div class="card-img-overlay">
                <div className="card-img-overlay-div">
                  <h5 class="card-title">Básico</h5>
                </div>
                </div>
              </div>
              </div>
            </div>

            <div className="col-12 col-lg-3 col-md-3 col-sm-6 col-xs-6">
              <div className="container-Second-Dashboard-img">
              <div class="card text-bg-dark">
                <img src={'https://image.hm.com/assets/hm/24/af/24af3cdaa8bf6934c4a290699262429d5ff6e5b9.jpg?imwidth=396'}
                 class="card-img-kids" alt="..."/>
                <div class="card-img-overlay">
                  <div className="card-img-overlay-div">
                    <h5 class="card-title">En tendencia</h5>
                  </div>
                </div>
              </div>
              </div>
            </div>

            <div className="col.12 col-lg-3 col-md-3 col-sm-6 col-xs-6">
              <div className="container-Second-Dashboard-img">
              <div class="card text-bg-dark">
                <img src={'https://image.hm.com/assets/hm/45/bc/45bc23d3b4e606fb257dee7782a66f71e1e3cedc.jpg?imwidth=264'}
                 class="card-img-kids " alt="..."/>
                <div class="card-img-overlay">
                  <div className="card-img-overlay-div">
                  <h5 class="card-title">Estilo Urbano</h5>
                  </div>
                </div>
              </div>
              </div>
            </div>

          </div>
        </div>
        <p className="Dashboard-button-center">     
              <button className="Second-Dashboard-button">
                VER TODO
              </button>           
          </p>
      </div>

        <div>
          <div className='Container-postdashboard'>
                <h1>TE PUEDE INTERESAR</h1>
          </div>
          <div className="Mujer-Container-Dashboard-Posts">
            {productos.filter(producto => producto.ubicación == 'KidsInteres').map(producto => (
                <div className='Mujer-Container-Dashboard-Posts' key={producto.id}>
                <Post
                imagen={producto.imagenProducto}
                imagenHover={producto.imagenProductoHover}
                articulo={producto.nombreProducto}
                precio={producto.precioProducto}
                color={producto.colorProducto}
                />
                </div>
            ))}
          </div>
        </div>

      </div>
      <Footer/>
    </div>
  );
}

export default Kids;
