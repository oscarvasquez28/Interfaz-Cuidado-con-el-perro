import React, { useState, useRef } from 'react';
import './Mujer.css';
import Header from '../Components/Header';
import Post from '../Components/Post';
import acdc from '../Images/Ropa/Mujer/acdc-mujer.jpg';
import acdc2 from '../Images/Ropa/Mujer/acdc-mujer2.jpg';

function Mujer() {
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

  return (
    <div ref={mujerContainerRef} className='Mujer-Container-All-page'>
      <Header />
      <div className="Mujer-Container">
        <div className="Mujer-Container-Dashboard-All">
          <div className="Mujer-Container-Dashboard">
            <div className="Mujer-Container-Dashboard-Subtitle">
              <span><h3 className='Container-Dashboard-Subtitle-h3'>LOS MÁS</h3></span>
              <span><h2 className='Container-Dashboard-Subtitle-h2'>VENDIDOS DE MUJER</h2></span>
            </div>
            <div className="Mujer-Container-Dashboard-Posts">
              <Post imagen={'https://app.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_7415.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'} imagenHover={'https://app.cuidadoconelperro.com.mx/media/catalog/product/2/_/2_7402.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'} 
              articulo="Vestido de Tirantes Cut Out" 
              precio={279.00} color="BLANCO" />
              <Post imagen={'https://app.cuidadoconelperro.com.mx/media/catalog/product/2/_/2_6457.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'} imagenHover={'https://app.cuidadoconelperro.com.mx/media/catalog/product/5/_/5_944.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'} 
              articulo="Sudadera con Capucha Estampado Kuromi" 
              precio={349.00} color="NEGRO" />
              <Post imagen={'https://app.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_6547.jpg?width=1480&optimize=low&bg-color=255,255,255&fit=bounds 1480w, https://app.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_6547.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'} imagenHover={'https://app.cuidadoconelperro.com.mx/media/catalog/product/2/_/2_6530.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'} 
              articulo="Sobreprenda Cambray" precio={299.00} color="AZUL" />
              <Post imagen={'https://app.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_7738.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'} imagenHover={'https://app.cuidadoconelperro.com.mx/media/catalog/product/2/_/2_7721.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds 1920w'} 
              articulo="Pantalón Wide Leg Fluido Negro Fiusha" 
               precio={249.00} color="ROSAS" />
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
                    <Post imagen={'https://app.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_7738.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'} imagenHover={'https://app.cuidadoconelperro.com.mx/media/catalog/product/2/_/2_7721.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds 1920w'} articulo="Playera Manga Corta Básica Estampado AC/DC" 
                    precio={149.00} color="GRIS" />
                  </div> */}
                  <div className="ArreglarBootstrap">
                    <Post imagen={'https://app.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_7426.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'} imagenHover={'https://app.cuidadoconelperro.com.mx/media/catalog/product/2/_/2_7413.jpg?width=1480&optimize=low&bg-color=255,255,255&fit=bounds 1480w, https://app.cuidadoconelperro.com.mx/media/catalog/product/2/_/2_7413.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'} 
                    articulo="Camisa Crop Verde con Bolsa" 
                    precio={229.00} color="VERDE" />
                  </div>
                  <div className="ArreglarBootstrap">
                    <Post imagen={'https://app.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_6139.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'} imagenHover={'https://app.cuidadoconelperro.com.mx/media/catalog/product/2/_/2_6124.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'} 
                    articulo="Vestido Salida de Playa Tejida" 
                    precio={249.00} color="BLANCOS" />
                  </div>
                  <div className="ArreglarBootstrap">
                    <Post imagen={'https://app.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_6089.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bound'} imagenHover={'https://app.cuidadoconelperro.com.mx/media/catalog/product/2/_/2_6074.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'} 
                    articulo="Top Active Rosa" 
                    precio={179.00} color="ROSA" />
                  </div>
                  <div className="ArreglarBootstrap">
                    <Post imagen={'https://app.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_7737.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'} imagenHover={'https://app.cuidadoconelperro.com.mx/media/catalog/product/2/_/2_7720.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'} 
                    articulo="Pantalón Wide Leg Fluido Negro" 
                    precio={249.00} color="GRIS" />
                  </div>
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
        <div className="Mujer-Container-Dashboard-Posts">
              <Post imagen={acdc} imagenHover={acdc2} articulo="Playera Manga Corta Básica Estampado AC/DC" precio={149.00} color="GRIS" />
              <Post imagen={acdc} imagenHover={acdc2} articulo="Playera Manga Corta Básica Estampado AC/DC" precio={149.00} color="GRIS" />
              <Post imagen={acdc} imagenHover={acdc2} articulo="Playera Manga Corta Básica Estampado AC/DC" precio={149.00} color="GRIS" />
              <Post imagen={acdc} imagenHover={acdc2} articulo="Playera Manga Corta Básica Estampado AC/DC" precio={149.00} color="GRIS" />
            </div>
      </div>
    </div>
  );
}

export default Mujer;
