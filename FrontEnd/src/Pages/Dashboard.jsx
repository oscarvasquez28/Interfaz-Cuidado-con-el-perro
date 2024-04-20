import React from 'react'
import '../Pages/Dashboard.css'
import Header from '../Components/Header'
import Carousel from '../Components/Carousel'
import Post from '../Components/Post'
import Footer from '../Components/Footer'
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
        <h3 className='Novedades'>NOVEDADES</h3> 
        {/* hay que darle un estilo a esto */}
        <div className="posts-container">
          <Post imagen={PlayeraGris} imagenHover={PlayeraGris2} articulo="Playera Rayas Gris Perro" precio={139.00} color="GRIS"/>
          <Post imagen={acdc} imagenHover={acdc2} articulo="Playera Manga Corta Básica Estampado AC/DC" precio={149.00} color="GRIS"/>
          <Post imagen={pokemon} imagenHover={pokemon2} articulo="Playera Manga Corta Pokemon" precio={89.90} color="ESTAMPADO"/>
          <Post imagen={CuelloResort} imagenHover={CuelloResort2} articulo="Camisa Cuello Resort Tela con Textura" precio={269.00} color="BLANCO"/>
          <Post imagen={Esponja} imagenHover={Esponja2} articulo="Playera Manga Larga Estampado Bob Esponja" precio={199.00} color="MULTICOLOR"/>
          <Post imagen={Goku} imagenHover={Goku2} articulo="Playera Estampado Licencia" precio={89.90} color="ESTAMPADO"/>
          <Post imagen={Vegeta} imagenHover={Vegeta2} articulo="Playera Vegeta Saiyan" precio={159.00} color="NEGRO"/>
          <Post imagen={Estampado} imagenHover={Estampado2} articulo="Playera Básica Estampado Dibujos en Toda la Prenda" precio={109.00} color="BLANCO"/>
          <Post imagen={Smile} imagenHover={Smile2} articulo="Playera Manga Corta Estampada" precio={89.00} color="ESTAMPADO"/>

        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Dashboard