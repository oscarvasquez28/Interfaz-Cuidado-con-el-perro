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
          <Post imagen={PlayeraGris} imagenHover={PlayeraGris2} articulo="Playera Rayas Gris Perro" precio={139.00} color="Grises"/>
          <Post imagen={acdc} imagenHover={acdc2} articulo="Playera Rayas Gris Perro" precio={139.00} color="Grises"/>
          <Post imagen={pokemon} imagenHover={pokemon2} articulo="Playera Rayas Gris Perro" precio={139.00} color="Grises"/>
          <Post imagen={CuelloResort} imagenHover={CuelloResort2} articulo="Playera Rayas Gris Perro" precio={139.00} color="Grises"/>
          <Post imagen={Esponja} imagenHover={Esponja2} articulo="Playera Rayas Gris Perro" precio={139.00} color="Grises"/>
          <Post imagen={Goku} imagenHover={Goku2} articulo="Playera Rayas Gris Perro" precio={139.00} color="Grises"/>
          <Post imagen={Vegeta} imagenHover={Vegeta2} articulo="Playera Rayas Gris Perro" precio={139.00} color="Grises"/>
          <Post imagen={Estampado} imagenHover={Estampado2} articulo="Playera Rayas Gris Perro" precio={139.00} color="Grises"/>
          <Post imagen={Smile} imagenHover={Smile2} articulo="Playera Rayas Gris Perro" precio={139.00} color="Grises"/>

        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Dashboard