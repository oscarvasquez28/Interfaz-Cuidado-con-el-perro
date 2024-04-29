import React from 'react'
import './MujerMenu.css'

function MujerMenu() {
  return (
    <div className='Container'>
        <div className="First-Column">
            <span className='First-child'><p>VER TODO MUJER</p></span>
            <span className='red'><p>REBAJAS MID SEASON</p></span>
            <span className='orange'><p>FESTIVALES</p></span>
            <span><p>NOVEDADES</p></span>
            <span><p>BÁSICOS</p></span>
            <span className='skyblue'><p>JEANS POR -$299</p></span>
            <span className='purple'><p>PLAYERAS POR $89.90</p></span>
        </div>
        <div className="Second-Column">
            <span className='subtitle'><p>Ropa</p></span>
            <span><p>TOPS Y BODIES</p></span>
            <span><p>PLAYERAS</p></span>
            <span><p>BLUSAS</p></span>
            <span><p>SUDADERAS Y SUÉTERES</p></span>
            <span><p>ROPA DEPORTIVA</p></span>
            <span><p>CHAMARRAS</p></span>
            <span><p>JEANS</p></span>
            <span><p>PANTALONES</p></span>
            <span><p>SHORTS Y BERMUDAS</p></span>
            <span><p>FALDAS</p></span>
            <span><p>VESTIDOS</p></span>
            <span><p>TRAJES DE BAÑO</p></span>

        </div>
        <div className="Third-Column">
            <span className='subtitle'><p>ZAPATOS Y ACCESORIOS</p></span>
            <span><p>ZAPATOS</p></span>
            <span><p>ACCESORIOS</p></span>
        </div>
    </div>
  )
}

export default MujerMenu