import React from 'react'
import './KidsMenu.css'

function KidsMenu() {
  return (
    <div>
        <div className="Kids-Margin">
        <div className="Edades-kids">
            <div className='Edades-First'>
                <div>
                <span><h3 className='Edades-subtitle'>BEBÉ (18M - 5 AÑOS)</h3></span>
                </div>
                
            </div>
            <div className='Edades-Second'>
                <div>
                <span><h3 className='Edades-subtitle'>NIÑA (5 - 12 AÑOS)</h3></span>
                </div>
            </div>
            <div className='Edades-Third'>
                <div>
                <span><h3 className='Edades-subtitle'>NIÑO (5 - 12 AÑOS)</h3></span>
                </div>
                
            </div>
            <div className='Edades-Fourth'>
                <div>
                <span><h3 className='Edades-subtitle'>CHICO(12 - 18 AÑOS)</h3></span>
                </div>
                
            </div>
        </div>
        </div>

        <div className='Container'>
            <div className="First-Column">
                <span className='First-child'><p>VER TODO BEBÉ </p></span>
                <span><p>NOVEDADES</p></span>
                <span className='red'><p>NOVEDADES HASTA -50%</p></span>
                {/* <span className='orange'><p>FESTIVALES</p></span>
                <span><p>BÁSICOS</p></span>
                <span className='purple'><p>PLAYERAS POR $89.90</p></span> */}
            </div>
            <div className="Second-Column">
                <span className='subtitle'><p>Ropa</p></span>
                <span><p>PLAYERAS</p></span>
                <span><p>CAMISAS</p></span>
                <span><p>SUDADERAS Y SUÉTERES</p></span>
                <span><p>CHAMARRAS Y CHALECOS</p></span>
                <span><p>JEANS</p></span>
                <span><p>PANTALONES</p></span>
                <span><p>BERMUDAS</p></span>
                <span><p>TRAJES DE BAÑO</p></span>
                <span><p>ROPA INTERIOR</p></span>

            </div>
            <div className="Third-Column">
                <span className='subtitle'><p>ZAPATOS Y ACCESORIOS</p></span>
                <span><p>ZAPATOS</p></span>
                <span><p>ACCESORIOS</p></span>
            </div>
        </div>
    </div>
  )
}

export default KidsMenu