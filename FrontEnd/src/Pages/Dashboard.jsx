import React from 'react'
import '../Pages/Dashboard.css'
import Header from '../Components/Header'
import Carousel from '../Components/Carousel'
import Post from '../Components/Post'
import Footer from '../Components/Footer'
import PlayeraGris from '../Images/Ropa/Hombre/playera-gris.jpg'
import CuelloResort from '../Images/Ropa/Hombre/cuello-resort.jpg'
import acdc from '../Images/Ropa/Mujer/acdc-mujer.jpg'
import pokemon from '../Images/Ropa/Kids/pokemon.jpg'

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
          <Post imagen={PlayeraGris} imagenHover={acdc} articulo="Playera Rayas Gris Perro" precio={139.00} color="Grises"/>
          <Post imagen={acdc} imagenHover={acdc} articulo="Playera Rayas Gris Perro" precio={139.00} color="Grises"/>
          <Post imagen={CuelloResort} imagenHover={acdc} articulo="Playera Rayas Gris Perro" precio={139.00} color="Grises"/>
          <Post imagen={pokemon} imagenHover={acdc} articulo="Playera Rayas Gris Perro" precio={139.00} color="Grises"/>
          <Post imagen={PlayeraGris} imagenHover={acdc} articulo="Playera Rayas Gris Perro" precio={139.00} color="Grises"/>
          <Post imagen={PlayeraGris} imagenHover={acdc} articulo="Playera Rayas Gris Perro" precio={139.00} color="Grises"/>
          <Post imagen={PlayeraGris} imagenHover={acdc} articulo="Playera Rayas Gris Perro" precio={139.00} color="Grises"/>
          <Post imagen={PlayeraGris} imagenHover={acdc} articulo="Playera Rayas Gris Perro" precio={139.00} color="Grises"/>
          <Post imagen={PlayeraGris} imagenHover={acdc} articulo="Playera Rayas Gris Perro" precio={139.00} color="Grises"/>
          <Post imagen={PlayeraGris} imagenHover={acdc} articulo="Playera Rayas Gris Perro" precio={139.00} color="Grises"/>
          <Post imagen={PlayeraGris} imagenHover={acdc} articulo="Playera Rayas Gris Perro" precio={139.00} color="Grises"/>
          <Post imagen={PlayeraGris} imagenHover={acdc} articulo="Playera Rayas Gris Perro" precio={139.00} color="Grises"/>
          
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Dashboard