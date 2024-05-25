import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Pages/Dashboard.css'
import Header from '../Components/Header'
import Carousel from '../Components/Carousel'
import Post from '../Components/Post'
import Footer from '../Components/Footer'

import introJs from 'intro.js';
import 'intro.js/introjs.css';

import PlayeraGris from '../Images/Ropa/Hombre/playera-gris.jpg'
import PlayeraGris2 from '../Images/Ropa/Hombre/playera-gris-2.jpg'
import CuelloResort from '../Images/Ropa/Hombre/cuello-resort.jpg'
import CuelloResort2 from '../Images/Ropa/Hombre/cuello-resort2.jpg'
import acdc from '../Images/Ropa/Mujer/acdc-mujer.jpg'
import acdc2 from '../Images/Ropa/Mujer/acdc-mujer2.jpg'
import pokemon from '../Images/Ropa/Kids/pokemon.jpg'
import pokemon2 from '../Images/Ropa/Kids/pokemon2.jpg'
import Esponja from '../Images/Ropa/Mujer/Esponja-mujer.jpg'
import Esponja2 from '../Images/Ropa/Mujer/Esponja-mujer2.jpg'
import Vegeta from '../Images/Ropa/Hombre/vegeta.jpg'
import Vegeta2 from '../Images/Ropa/Hombre/vegeta2.jpg'
import Estampado from '../Images/Ropa/Mujer/estampado.jpg'
import Estampado2 from '../Images/Ropa/Mujer/estampado2.jpg'
import Goku from '../Images/Ropa/Kids/goku.jpg'
import Goku2 from '../Images/Ropa/Kids/goku2.jpg'
import Smile from '../Images/Ropa/Kids/smile.jpg'
import Smile2 from '../Images/Ropa/Kids/smile2.jpg'



// import fondo from './cuidado1.jpg'
function Dashboard() {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8081/LeerProducto`)
        .then(res => {
            console.log(res);
            setProductos(res.data); // Se asigna la lista completa de carritos
        })
        .catch(err => console.log(err));
}, []);

useEffect(() => {
  // Verificar si el tour ya ha sido mostrado en esta carga de página
  if (!window.hasSeenTour) {
    introJs().setOptions({
      steps: [
        {
          element: '#mujer-navbar',
          // title: "Sección Mujeres",
          intro: 'En esta sección puedes encontrar los artículos de mujer',
        },
        {
          element: '#hombre-navbar',
          intro: 'En esta sección puedes encontrar los artículos de hombre',
        },
        {
          element: '#ninos-navbar',
          intro: 'En esta sección puedes encontrar los artículos de niños',
        },
        {
          element: '#Buscar-navbar',
          intro: 'En esta sección puedes realizar búsqueda de artículos',
        },
        {
          element: '#LogIn-navbar',
          intro: 'En esta sección puedes iniciar sesión o crear una cuenta',
        },
        {
          element: '#Favoritos-navbar',
          intro: 'En esta sección puedes ver tus artículos favoritos',
        },
        {
          element: '#Carrito-navbar',
          intro: 'En esta sección puedes ver los artículos que has añadido en el carrito',
        },
        {
          element: '#NovedadesIntro',
          intro: 'En esta sección puedes ver las novedades de nuestra colección',
        },
      ],
      showStepNumbers: true,
      showBullets: true,
      showProgress: true,
      tooltipClass: 'customTooltip',
      highlightClass: 'customHighlight',
    }).start();

    // Marcar que el tour ha sido mostrado
    window.hasSeenTour = true;
  }
}, []);

  return (
    <div className="App">
      <div className='App-Home'>
        <header className="App-header">        
        {/* <img src={fondo} className="App-fondo" alt="fondo" /> */}
          <Header/>
          {/* <Component/> */}
        </header>
        <Carousel/>
      </div>
      <div className='App-novedades'>
        <h3 className='subtitle'>LO MÁS PERRO</h3>
        <h3 className='Novedades'  id='NovedadesIntro'>NOVEDADES</h3> 
        {/* hay que darle un estilo a esto */}
        <div className="ArreglarBootstrap-Container">
          {/* <Post imagen='https://app.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_8466.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'
          imagenHover='https://app.cuidadoconelperro.com.mx/media/catalog/product/2/_/2_8429.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'
          articulo="Sudadera Jujutsu kaisen" precio={369.00} color="NEGRO"/> */}
          {/* <Post imagen='https://app.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_8280.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'
          imagenHover='https://app.cuidadoconelperro.com.mx/media/catalog/product/2/_/2_8243.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'
          articulo="Sudadera con franja en contraste" precio={279.00} color="NEGRO"/> */}
          {/* <Post imagen='https://app.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_8668.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'
          imagenHover='https://app.cuidadoconelperro.com.mx/media/catalog/product/2/_/2_8631.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'
          articulo="Jogger estampado" precio={229.00} color="NEGRO"/> */}
          {/* <Post imagen='https://app.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_8465.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'
          imagenHover='https://app.cuidadoconelperro.com.mx/media/catalog/product/2/_/2_8428.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'
          articulo="Sudadera Luffy" precio={369.00} color="BLANCO"/> */}
          {/* <Post imagen='https://app.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_8277.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'
          imagenHover='https://app.cuidadoconelperro.com.mx/media/catalog/product/2/_/2_8240.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'
          articulo="Top sin mangas" precio={149.00} color="NEGRO"/> */}
          {/* <Post imagen='https://app.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_8669.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'
          imagenHover='https://app.cuidadoconelperro.com.mx/media/catalog/product/2/_/2_8632.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'
          articulo="Conjunto Manga Corta" precio={229.00} color="MULTICOLOR"/> */}
          {/* <Post imagen='https://app.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_8361.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'
          imagenHover='https://app.cuidadoconelperro.com.mx/media/catalog/product/2/_/2_8324.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'
          articulo="Playera Jujustu Kaisen Chibbi" precio={159.00} color="MORADO"/>
          <Post imagen='https://app.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_8281.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'
          imagenHover='https://app.cuidadoconelperro.com.mx/media/catalog/product/2/_/2_8244.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'
          articulo="Sudadera con cierre al frente" precio={279.00} color="BLANCO"/> */}
          {/* <Post imagen='https://app.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_555_1.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'
          imagenHover='https://app.cuidadoconelperro.com.mx/media/catalog/product/2/_/2_554_1.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'
          articulo="Playera Estampado Digimon" precio={129.00} color="ESTAMPADO"/> */}
            {productos.filter(producto => producto.ubicación == 'inicio').map(producto => (
              <div className="ArreglarBootstrap-Container" key={producto.id}>
                <div className='ArreglarBootstrap'>
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
        <div>




    </div>

        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Dashboard