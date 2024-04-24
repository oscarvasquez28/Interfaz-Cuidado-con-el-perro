import React, { useState, useRef } from 'react';
import './Mujer.css';
import Header from '../Components/Header';
import Post from '../Components/Post';
import acdc from '../Images/Ropa/Mujer/acdc-mujer.jpg';
import acdc2 from '../Images/Ropa/Mujer/acdc-mujer2.jpg';

function Kids() {
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
              <span><h2 className='Container-Dashboard-Subtitle-h2'>VENDIDOS DE NIÑOS</h2></span>
            </div>
            <div className="Mujer-Container-Dashboard-Posts">
              <Post imagen={'https://app.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_6183.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'} imagenHover={'https://app.cuidadoconelperro.com.mx/media/catalog/product/2/_/2_6168.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'}
              articulo="Playera Manga Corta Básica Estampado AC/DC" precio={149.00} color="GRIS" />
              <Post imagen={'https://app.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_6167.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'} imagenHover={'https://app.cuidadoconelperro.com.mx/media/catalog/product/2/_/2_6152.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'} 
              articulo="Playera Manga Corta Básica Estampado AC/DC"  precio={149.00} color="GRIS" />
              <Post imagen={'https://app.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_6389.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'} imagenHover={'https://app.cuidadoconelperro.com.mx/media/catalog/product/2/_/2_6371.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'} 
              articulo="Playera Manga Corta Básica Estampado AC/DC" precio={149.00} color="GRIS" />
              <Post imagen={'https://app.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_5557.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'} imagenHover={'https://app.cuidadoconelperro.com.mx/media/catalog/product/2/_/2_5540.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'}
               articulo="Playera Manga Corta Básica Estampado AC/DC" precio={149.00} color="GRIS" />
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
                    <Post imagen={'https://app.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_6148.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'} imagenHover={'https://app.cuidadoconelperro.com.mx/media/catalog/product/2/_/2_6133.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'} 
                    articulo="Playera Estampado" 
                    precio={99.00} color="AZULES" />
                  </div>
                  <div className="ArreglarBootstrap">
                    <Post imagen={'https://app.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_6761.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'} imagenHover={'https://app.cuidadoconelperro.com.mx/media/catalog/product/2/_/2_6746.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'} 
                    articulo="Playera con Capucha Estampado Garfied" 
                    precio={129.00} color="MULTICOLOR" />
                  </div>
                  <div className="ArreglarBootstrap">
                    <Post imagen={'https://app.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_6747.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'} imagenHover={'https://app.cuidadoconelperro.com.mx/media/catalog/product/2/_/2_6730.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'} 
                    articulo="Playera Manga Corta Estampado Foil" 
                    precio={89.00} color="NEGROS" />
                  </div>
                  <div className="ArreglarBootstrap">
                    <Post imagen={'https://app.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_6753.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'} imagenHover={'https://app.cuidadoconelperro.com.mx/media/catalog/product/2/_/2_6736.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'} 
                    articulo="Pantalóm Flare Full Print" 
                    precio={129.00} color="ESTAMPADO" />
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

export default Kids;
