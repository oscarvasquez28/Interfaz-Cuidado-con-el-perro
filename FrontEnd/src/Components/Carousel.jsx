import React from 'react'
import { Link } from 'react-router-dom'
// import Cuidado1 from '../Images/cuidado1.jpg'
import Cuidado2 from '../Images/Carousel-images/cuidado2.jpg'
import Cuidado3 from '../Images/Carousel-images/cuidado3.jpg'
// import Cuidado4 from '../Images/cuidado4.jpg'
import Cuidado5 from '../Images/Carousel-images/cuidado5.jpg'
// import Cuidado6 from '../Images/cuidado6.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

const Carousel = props => (

    <div className='carousel-comp'>
        <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="4000">
                    <img src={Cuidado5} className="d-block w-100" style={{ maxHeight: "100vh" }} alt="banner 1"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5 style={{ fontSize: "120px" }}>MUJER</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="4000">
                    <img src={Cuidado2} className="d-block w-100" style={{ maxHeight: "100vh" }} alt="banner 2"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5 style={{ fontSize: "120px" }}>HOMBRE</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="4000">
                    <img src={Cuidado3} className="d-block w-100" style={{ maxHeight: "100vh" }} alt="banner 3"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5 style={{ fontSize: "120px" }}>KIDS</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
     
    </div>
)

export default Carousel