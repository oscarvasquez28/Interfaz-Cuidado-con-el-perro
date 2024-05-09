import React, { useState } from 'react';
import './Talla.css'

const Talla = ({ onTallaSeleccionada }) => {
  const [botonSeleccionado, setBotonSeleccionado] = useState("Talla");

  const handleClick = (valor) => {
    setBotonSeleccionado(valor);
    // Llama a la función de devolución de llamada con el valor seleccionado
    onTallaSeleccionada(valor);
  };

  return (
    <div className="dropdown">
      <button className="Dropdown-button" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        <div className="Dropdown-button-center">
          <div className='Dropdown-button-talla'>
            <span>{botonSeleccionado}</span>
          </div>
          <div className='Dropdown-button-icon'>
            <span><i className="bi bi-chevron-compact-down"></i></span>
          </div>
        </div>
      </button>
      <ul className="dropdown-menu">
        <li><p className="dropdown-item"  onClick={() => handleClick("XCH - XS")}>XCH - XS</p></li>
        <li><p className="dropdown-item"  onClick={() => handleClick("CH - S")}>CH - S</p></li>
        <li><p className="dropdown-item"  onClick={() => handleClick("MD - M")}>MD - M</p></li>
        <li><p className="dropdown-item"  onClick={() => handleClick("GD - L")}>GD - L</p></li>
        <li><p className="dropdown-item"  onClick={() => handleClick("XGD - XL")}>XGD - XL</p></li>
      </ul>
       {/* <p>Botón seleccionado: {botonSeleccionado}</p> */}
    </div>
  );
}

export default Talla;

