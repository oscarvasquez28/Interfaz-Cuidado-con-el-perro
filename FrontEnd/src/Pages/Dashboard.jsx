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
          <Post imagen='https://app.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_8466.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'
          imagenHover='https://app.cuidadoconelperro.com.mx/media/catalog/product/2/_/2_8429.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'
          articulo="Sudadera Jujutsu kaisen" precio={369.00} color="NEGRO"/>
          <Post imagen='https://app.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_8280.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'
          imagenHover='https://app.cuidadoconelperro.com.mx/media/catalog/product/2/_/2_8243.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'
          articulo="Sudadera con franja en contraste" precio={279.00} color="NEGRO"/>
          <Post imagen='https://app.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_8668.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'
          imagenHover='https://app.cuidadoconelperro.com.mx/media/catalog/product/2/_/2_8631.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'
          articulo="Jogger estampado" precio={229.00} color="NEGRO"/>
          <Post imagen='https://app.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_8465.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'
          imagenHover='https://app.cuidadoconelperro.com.mx/media/catalog/product/2/_/2_8428.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'
          articulo="Sudadera Luffy" precio={369.00} color="BLANCO"/>
          <Post imagen='https://app.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_8277.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'
          imagenHover='https://app.cuidadoconelperro.com.mx/media/catalog/product/2/_/2_8240.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'
          articulo="Top sin mangas" precio={149.00} color="NEGRO"/>
          <Post imagen='https://app.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_8669.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'
          imagenHover='https://app.cuidadoconelperro.com.mx/media/catalog/product/2/_/2_8632.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'
          articulo="Conjunto Manga Corta" precio={229.00} color="MULTICOLOR"/>
          <Post imagen='https://app.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_8361.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'
          imagenHover='https://app.cuidadoconelperro.com.mx/media/catalog/product/2/_/2_8324.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'
          articulo="Playera Jujustu Kaisen Chibbi" precio={159.00} color="MORADO"/>
          <Post imagen='https://app.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_8281.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'
          imagenHover='https://app.cuidadoconelperro.com.mx/media/catalog/product/2/_/2_8244.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'
          articulo="Sudadera con cierre al frente" precio={279.00} color="BLANCO"/>
          <Post imagen='https://app.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_555_1.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'
          imagenHover='https://app.cuidadoconelperro.com.mx/media/catalog/product/2/_/2_554_1.jpg?width=1920&optimize=low&bg-color=255,255,255&fit=bounds'
          articulo="Playera Estampado Digimon" precio={129.00} color="ESTAMPADO"/>

        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Dashboard