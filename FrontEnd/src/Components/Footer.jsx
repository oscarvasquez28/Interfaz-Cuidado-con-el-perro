import React from 'react';
import './Footer.css';
// import bfooter from '../Images/Footer/background-footer.jpg'
import newsletter from '../Images/Footer/newsletter-mobile.png'
function Footer(){
    return (

        <div className='All-cards-footer'>
            <div className='contenedor-footer'>
                <h3 className='title'>NOSOTROS</h3>
                <p className='links'>Quienes somos</p>
                <p className='links'>Tiendas</p>
                <p className='links'>Política de medioambiente</p>
                <p className='links'>Responsabilidad social</p>
                <p className='links'>Trabaja con nosotros</p>
                <p className='links'>App</p>
            </div>
        
            <div className='contenedor-footer'>
                <h3 className='title'>AYUDA</h3>
                <p className='links'>Preguntas frecuentes</p>
                <p className='links'>Contacto</p>
                <p className='links'>Guía de tallas</p>
                <p className='links'>Envíos</p>
                <p className='links'>Cambio y devoluciones</p>
                <p className='links'>Pagos y seguridad</p>
                <p className='links'>Términos y condiciones</p>
                <p className='links'>Aviso de privacidad</p>
                <p className='links'>Aviso de privacidad para reclutas</p>
                <p className='links'>Sitemap</p>

                <br /><br /><br /><br />
                <p className='links'>© Cuidado con el Perro 2023. / Todos los Derechos Reservados</p>
            </div> 

            <form action="">
                <div className='contenedor-footer'>          

                <div className='texts'>
                    <h3 className='title'>Promociones y Novedades</h3>
                    <p className='links'>Suscríbete y te daremos un <strong>10% en tu próxima compra</strong>, acceso a ofertas exclusivas y muchas sorpresas más.</p>
                    
                    <br />
                    <div className='accept'>
                    <input className='check-accept' type="checkbox"  />
                    <p className='links'>He leído el Aviso de Privacidad y acepto recibir comunicaciones comerciales.</p>              
                    </div>     
                    <br />     
                </div>  
                <div className='background-img-newsletter-container'>
                    <img className='background-img-newsletter' src={newsletter } />  
                </div> 

                <div className='email'>
                    <input type="text" className='email-subscribe' placeholder='Direccion de correo' />
                    <button className='btn-unirse'>UNIRSE</button>
                    
                </div>

                <br />
                <div className='social-media'>
                    <i class="bi bi-instagram SM-logo"></i>
                    <i class="bi bi-tiktok SM-logo"></i>
                    <i class="bi bi-youtube SM-logo"></i>
                    <i class="bi bi-twitter SM-logo"></i>
                    <i class="bi bi-facebook SM-logo"></i>
                </div>   
                    
                </div>    
            </form>
        </div>       
    );
}

export default Footer;