import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Header from '../Components/Header';
import './Search.css';
import Post from '../Components/Post';

function Search() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8081/LeerProducto`)
            .then(res => {
                console.log(res);
                setProductos(res.data); // Se asigna la lista completa de carritos
            })
            .catch(err => console.log(err));
    }, []);

    const [busqueda, setBusqueda] = useState('');
    const [selectedColors, setSelectedColors] = useState([]);

    const handleInputChange = (event) => {
        // Actualiza el estado de la búsqueda con el valor del input
        setBusqueda(event.target.value);
      };
    
      const handleColorChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
          setSelectedColors([...selectedColors, value]);
        } else {
          setSelectedColors(selectedColors.filter((color) => color !== value));
        }
      };
    
      // Filtra los productos cuyos nombres contengan el valor de búsqueda y tengan los colores seleccionados
      const productosFiltrados = productos.filter(producto => 
        producto.nombreProducto.toLowerCase().includes(busqueda.toLowerCase()) &&
        (selectedColors.length === 0 || selectedColors.some(color => producto.colorProducto.includes(color)))
      );
  return (
    <div>
        <Header/>
        <div className='Search-container'>
            <div className="col-md-3">
                <div className="row">
                    <div className="Search-filtros">
                        {/* <p class="d-inline-flex gap-1"> */}
                        <h4>FILTRAR</h4>
                        <div className="filtro-border">
                                <div className="Filtro-talla">
                                    <a className="btn-filtro-talla" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    <div className="talla-container">
                                        <div className="talla-text">TALLA</div>
                                        <div className="talla-icon"> + </div>
                                    </div>
                                    </a>
                                </div>
                            {/* </p> */}
                            <div className="collapse" id="collapseExample">
                                <div className="card-body-style">
                                    <div className="card card-body">
                                        <div className='talla-opciones'>
                                            <input type="checkbox" value='XCH - XS' id='XCH'/>
                                            <label htmlFor="XCH">XCH - XS</label>
                                        </div>
                                        <div className='talla-opciones'>
                                            <input type="checkbox" value='CH - S' id='CH'/>
                                            <label htmlFor="XCH">CH - S</label>
                                        </div>
                                        <div className='talla-opciones'>
                                            <input type="checkbox" value='MD - M' id='MD'/>
                                            <label htmlFor="XCH">MD - M</label>
                                        </div>
                                        <div className='talla-opciones'>
                                            <input type="checkbox" value='GD - L' id='GD'/>
                                            <label htmlFor="XCH">GD - L</label>
                                        </div>
                                        <div className='talla-opciones'>
                                            <input type="checkbox" value='XGD - XL' id='XGD'/>
                                            <label htmlFor="XCH">XGD - XL</label>
                                        </div>
                                    </div>
                                </div>
    
                            </div>
                        </div>
                        <div className="filtro-border">
                                <div className="Filtro-talla">
                                    <a className="btn-filtro-talla" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    <div className="talla-container">
                                        <div className="talla-text">COLOR</div>
                                        <div className="talla-icon"> + </div>
                                    </div>
                                    </a>
                                </div>
                            {/* </p> */}
                            <div className="collapse" id="collapseExample2">
                                <div className="card-body-style">
                                    <div className="card card-body">
                                        <div className='talla-opciones'>
                                            <input type="checkbox" value='BLANCO' id='BLANCO' onChange={handleColorChange}/>
                                            <label htmlFor="BLANCO">BLANCO</label>
                                        </div>
                                        <div className='talla-opciones'>
                                            <input type="checkbox" value='NEGRO' id='NEGRO' onChange={handleColorChange}/>
                                            <label htmlFor="NEGRO">NEGRO</label>
                                        </div>
                                        <div className='talla-opciones'>
                                            <input type="checkbox" value='VERDE' id='VERDE' onChange={handleColorChange}/>
                                            <label htmlFor="VERDE">VERDE</label>
                                        </div>
                                        <div className='talla-opciones'>
                                            <input type="checkbox" value='AZUL' id='AZUL' onChange={handleColorChange}/>
                                            <label htmlFor="AZUL">AZUL</label>
                                        </div>
                                        <div className='talla-opciones'>
                                            <input type="checkbox" value='MORADO' id='MORADO' onChange={handleColorChange}/>
                                            <label htmlFor="MORADO">MORADO</label>
                                        </div>
                                        <div className='talla-opciones'>
                                            <input type="checkbox" value='ROSA' id='ROSA' onChange={handleColorChange}/>
                                            <label htmlFor="ROSA">ROSA</label>
                                        </div>
                                        <div className='talla-opciones'>
                                            <input type="checkbox" value='GRIS' id='GRIS' onChange={handleColorChange}/>
                                            <label htmlFor="GRIS">GRIS</label>
                                        </div>
                                        <div className='talla-opciones'>
                                            <input type="checkbox" value='ESTAMPADO' id='ESTAMPADO' onChange={handleColorChange}/>
                                            <label htmlFor="ESTAMPADO">ESTAMPADO</label>
                                        </div>
                                        <div className='talla-opciones'>
                                            <input type="checkbox" value='MULTICOLOR' id='MULTICOLOR' onChange={handleColorChange}/>
                                            <label htmlFor="MULTICOLOR">MULTICOLOR</label>
                                        </div>
                                    </div>
                                </div>
    
                            </div>
                        </div>

                        <div className="filtro-border">
                                <div className="Filtro-talla">
                                    <a className="btn-filtro-talla" data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    <div className="talla-container">
                                        <div className="talla-text">CATEGORÍA</div>
                                        <div className="talla-icon"> + </div>
                                    </div>
                                    </a>
                                </div>
                            {/* </p> */}
                            <div className="collapse" id="collapseExample3">
                                <div className="card-body-style">
                                    <div className="card card-body">
                                        <div className='talla-opciones'>
                                            <input type="checkbox" value='XCH - XS' id='XCH'/>
                                            <label htmlFor="XCH">CAMISAS</label>
                                        </div>
                                        <div className='talla-opciones'>
                                            <input type="checkbox" value='CH - S' id='CH'/>
                                            <label htmlFor="XCH">SUDADERAS</label>
                                        </div>
                                        <div className='talla-opciones'>
                                            <input type="checkbox" value='MD - M' id='MD'/>
                                            <label htmlFor="XCH">PANTALONES</label>
                                        </div>
                                        <div className='talla-opciones'>
                                            <input type="checkbox" value='GD - L' id='GD'/>
                                            <label htmlFor="XCH">FALDAS</label>
                                        </div>
                                        <div className='talla-opciones'>
                                            <input type="checkbox" value='XGD - XL' id='XGD'/>
                                            <label htmlFor="XCH">ACCESORIOS</label>
                                        </div>
                                    </div>
                                </div>
    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-9">
                <div className="row">
                    <div className='Container-Barra-busqueda'>
                        <input type="text" className='Barra-busqueda' placeholder='BUSCAR' 
                        value={busqueda} // El valor del input es controlado por el estado
                        onChange={handleInputChange}/>
                    </div>
                </div>
                <div className="row">
                    <div>
                    
                    </div>
                    {productosFiltrados.length > 0 && (
                        <div id='subtitle-productos-mostrados'>
                            <h5>Productos encontrados para: {busqueda}</h5>
                        </div>
                        
                    )}
                    <div className="Mujer-Container-Dashboard-Posts">
                    {productosFiltrados.length === 0 ? (
                    <h5>No se encontraron resultados para: {busqueda} </h5>
                    ) : (
                    productosFiltrados.map(producto => (
                    <div className="Mujer-Container-Dashboard-Posts" key={producto.id}>
                        <Post
                        imagen={producto.imagenProducto}
                        imagenHover={producto.imagenProductoHover}
                        articulo={producto.nombreProducto}
                        precio={producto.precioProducto}
                        color={producto.colorProducto}
                        />
                    </div>
                    ))
                )}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search