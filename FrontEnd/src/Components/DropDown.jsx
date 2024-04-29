import React from 'react'
import './DropDown.css' 


function DropDown(props){
  return (

    <div className='dd-Dropdown_container'>

        <li className="dd-dropdown__list">  
        
          <a href="#" className="dd-dropdown__link">
            <div className='dd-dropdown__div'>             
                <span className="dd-dropdown__span dd-dropdown__icon dd-text-tile">
                {props.title}   
                
              </span>           
            </div>     

            <div className='dd-dropdown__arrow'>
              <i className="bi bi-chevron-down"></i>             
            </div>       
            <input type="checkbox" className='dd-dropdown__check' />
          </a>

          <div className="dd-dropdown__content">
            <ul className="dd-dropdown__sub">
              <li className="dd-dropdown__li">                        
                <p>{props.texto1}</p>
                <p>{props.texto2}</p>
                <p>{props.texto3}</p>
                <p>{props.texto4}</p>
                <p>{props.texto5}</p>

              </li>
            </ul>
          </div>
        </li>
    </div>
  )
}

export default DropDown