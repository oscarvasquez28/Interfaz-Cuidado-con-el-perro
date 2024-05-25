import React, { useState, useRef, useEffect } from 'react';
import $ from 'jquery';
import axios from 'axios';
import './Mujer.css';
import Header from '../Components/Header';
import Post from '../Components/Post';
import Footer from '../Components/Footer'
import acdc from '../Images/Ropa/Mujer/acdc-mujer.jpg';
import acdc2 from '../Images/Ropa/Mujer/acdc-mujer2.jpg';

function Hombre() {
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
              <span><h2 className='Container-Dashboard-Subtitle-h2'>VENDIDOS DE HOMBRE</h2></span>
            </div>
            <div className="Mujer-Container-Dashboard-Posts">
              {/* <Post imagen={'https://app.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_7374.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'} 
              imagenHover={'https://app.cuidadoconelperro.com.mx/media/catalog/product/2/_/2_7361.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'} 
              articulo="Camisa Botones Contraste" 
              precio={279.00} color="BLANCO" /> */}
              {/* <Post imagen={'https://app.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_7376.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'} 
              imagenHover={'https://app.cuidadoconelperro.com.mx/media/catalog/product/2/_/2_7363.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'} 
              articulo="Playera Estampado Tropical" 
              precio={129.00} color="ESTAMPADOS" /> */}
              {/* <Post imagen={'https://app.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_7234.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'}
              imagenHover={'https://app.cuidadoconelperro.com.mx/media/catalog/product/2/_/2_7217.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'} 
              articulo="Playera Hombros Tejidos" precio={299.00} color="VERDES" /> */}
              {/* <Post imagen={'https://app.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_7359.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'} 
              imagenHover={'https://app.cuidadoconelperro.com.mx/media/catalog/product/2/_/2_7346.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'} 
              articulo="Jogger Cargo Estampado Calavera" 
               precio={369.00} color="NEGROS" /> */}
                {productos.filter(producto => producto.ubicación == 'HombresDashboard').map(producto => (
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
                  {/* <div className="ArreglarBootstrap">
                    <Post imagen={'https://app.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_7279.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'} 
                    imagenHover={'https://app.cuidadoconelperro.com.mx/media/catalog/product/2/_/2_7262.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'} 
                    articulo="Playera Estampado Death Vacation" 
                    precio={139.00} color="MORADO" />
                  </div> */}
                  {/* <div className="ArreglarBootstrap">
                    <Post imagen={'https://app.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_7349.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'} 
                    imagenHover={'https://app.cuidadoconelperro.com.mx/media/catalog/product/2/_/2_7336.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'} 
                    articulo="Playera Estampado Texto Dribble" 
                    precio={169.00} color="BLANCOS" />
                  </div> */}
                  {/* <div className="ArreglarBootstrap">
                    <Post imagen={'https://app.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_7289.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'} 
                    imagenHover={'https://app.cuidadoconelperro.com.mx/media/catalog/product/2/_/2_7276.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'} 
                    articulo="Jogger Cierrres Negro" 
                    precio={299.00} color="NEGROS" />
                  </div> */}
                  {/* <div className="ArreglarBootstrap">
                    <Post imagen={'https://app.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_5936.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'} 
                    imagenHover={'https://app.cuidadoconelperro.com.mx/media/catalog/product/2/_/2_5927.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'} 
                    articulo="Sudadera Bordado Underground" 
                    precio={329.00} color="AZULES" />
                  </div> */}

                  {productos.filter(producto => producto.ubicación == 'HombresDashboardHide').map(producto => (
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
          <div className="row">

            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
              <div className="container-Second-Dashboard-img">
              <div class="card text-bg-dark">
                <img src={'https://static.bershka.net/4/static/images/bershkastyle/style_chico_casual.jpg?1105&t=20240518020007&imwidth=750&impolicy=bershka-itxhigh'} 
                class="card-img " alt="..."/>
                <div class="card-img-overlay">
                  <div className="card-img-overlay-div">
                  <h5 class="card-title">Casual</h5>
                  </div>                
                </div>
              </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
              <div className="container-Second-Dashboard-img">
              <div class="card text-bg-dark">
                <img src={'https://static.bershka.net/4/static/images/bershkastyle/style_chico_basic.jpg?1105&t=20240518020007&imwidth=750&impolicy=bershka-itxhigh'}
                 class="card-img " alt="..."/>
                <div class="card-img-overlay">
                <div className="card-img-overlay-div">
                  <h5 class="card-title">Básico</h5>
                </div>
                </div>
              </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
              <div className="container-Second-Dashboard-img">
              <div class="card text-bg-dark">
                <img src={'https://static.bershka.net/4/static/images/bershkastyle/style_chico_trendy.jpg?1105&t=20240518020007&imwidth=750&impolicy=bershka-itxhigh'}
                 class="card-img " alt="..."/>
                <div class="card-img-overlay">
                  <div className="card-img-overlay-div">
                    <h5 class="card-title">En tendencia</h5>
                  </div>
                </div>
              </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
              <div className="container-Second-Dashboard-img">
              <div class="card text-bg-dark">
                <img src={'https://static.bershka.net/4/static/images/bershkastyle/style_chico_streetwear.jpg?1105&t=20240518020007&imwidth=750&impolicy=bershka-itxhigh'}
                 class="card-img " alt="..."/>
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
                {productos.filter(producto => producto.ubicación == 'HombresInteres').map(producto => (
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

export default Hombre;
