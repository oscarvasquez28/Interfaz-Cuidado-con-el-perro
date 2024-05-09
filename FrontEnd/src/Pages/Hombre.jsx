import React, { useState, useRef } from 'react';
import './Mujer.css';
import Header from '../Components/Header';
import Post from '../Components/Post';
import acdc from '../Images/Ropa/Mujer/acdc-mujer.jpg';
import acdc2 from '../Images/Ropa/Mujer/acdc-mujer2.jpg';

function Hombre() {
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
              <span><h2 className='Container-Dashboard-Subtitle-h2'>VENDIDOS DE HOMBRE</h2></span>
            </div>
            <div className="Mujer-Container-Dashboard-Posts">
              <Post imagen={'https://app.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_7374.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'} 
              imagenHover={'https://app.cuidadoconelperro.com.mx/media/catalog/product/2/_/2_7361.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'} 
              articulo="Camisa Botones Contraste" 
              precio={279.00} color="BLANCO" />
              <Post imagen={'https://app.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_7376.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'} 
              imagenHover={'https://app.cuidadoconelperro.com.mx/media/catalog/product/2/_/2_7363.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'} 
              articulo="Playera Estampado Tropical" 
              precio={129.00} color="ESTAMPADOS" />
              <Post imagen={'https://app.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_7234.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'}
              imagenHover={'https://app.cuidadoconelperro.com.mx/media/catalog/product/2/_/2_7217.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'} 
              articulo="Playera Hombros Tejidos" precio={299.00} color="VERDES" />
              <Post imagen={'https://app.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_7359.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'} 
              imagenHover={'https://app.cuidadoconelperro.com.mx/media/catalog/product/2/_/2_7346.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'} 
              articulo="Jogger Cargo Estampado Calavera" 
               precio={369.00} color="NEGROS" />
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
                  <div className="ArreglarBootstrap">
                    <Post imagen={'https://app.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_7279.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'} imagenHover={'https://app.cuidadoconelperro.com.mx/media/catalog/product/2/_/2_7262.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'} 
                    articulo="Playera Estampado Death Vacation" 
                    precio={139.00} color="MORADO" />
                  </div>
                  <div className="ArreglarBootstrap">
                    <Post imagen={'https://app.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_7349.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'} imagenHover={'https://app.cuidadoconelperro.com.mx/media/catalog/product/2/_/2_7336.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'} 
                    articulo="Playera Estampado Texto Dribble" 
                    precio={169.00} color="BLANCOS" />
                  </div>
                  <div className="ArreglarBootstrap">
                    <Post imagen={'https://app.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_7289.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'} imagenHover={'https://app.cuidadoconelperro.com.mx/media/catalog/product/2/_/2_7276.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'} 
                    articulo="Jogger Cierrres Negro" 
                    precio={299.00} color="NEGROS" />
                  </div>
                  <div className="ArreglarBootstrap">
                    <Post imagen={'https://app.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_5936.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'} imagenHover={'https://app.cuidadoconelperro.com.mx/media/catalog/product/2/_/2_5927.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'} 
                    articulo="Sudadera Bordado Underground" 
                    precio={329.00} color="AZULES" />
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

export default Hombre;
