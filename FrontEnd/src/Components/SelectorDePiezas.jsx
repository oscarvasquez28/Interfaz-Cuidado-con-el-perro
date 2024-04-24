import React, { useState } from 'react';
import './SelectorDePiezas.css'

function Selector() {
  const [botonSeleccionado, setBotonSeleccionado] = useState("1");

  const handleClick = (valor) => {
    setBotonSeleccionado(valor);
  };

  return (
    <div className="p-dropdown">
      <button className="p-Dropdown-button" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        <div className="p-Dropdown-button-center">
          <div className='p-Dropdown-button-talla'>
            <span>{botonSeleccionado}</span>
          </div>
          
          <div className='p-Dropdown-button-icon'>
            <span><i className="bi bi-chevron-compact-down"></i></span>
          </div>
        </div>
      </button>
      <ul className="dropdown-menu">
        <li><p className="p-dropdown-item"  onClick={() => handleClick("1")}>1</p></li>
        <li><p className="p-dropdown-item"  onClick={() => handleClick("2")}>2</p></li>
        <li><p className="p-dropdown-item"  onClick={() => handleClick("3")}>3</p></li>
        <li><p className="p-dropdown-item"  onClick={() => handleClick("4")}>4</p></li>
        <li><p className="p-dropdown-item"  onClick={() => handleClick("5")}>5</p></li>
      </ul>
       {/* <p>Botón seleccionado: {botonSeleccionado}</p> */}
    </div>
  );
}

export default Selector;

