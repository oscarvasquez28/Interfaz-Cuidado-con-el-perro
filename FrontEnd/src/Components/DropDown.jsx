import React from 'react'
import './DropDown.css' 


function DropDown(props){
  return (

    <div className='Dropdown_container'>

        <li className="dropdown__list">  
        
          <a href="#" className="dropdown__link">
            <div className='dropdown__div'>             
                <span className="dropdown__span dropdown__icon dd-text-tile">
                {props.title}   
                
              </span>           
            </div>     

            <div className='dropdown__arrow'>
              <i className="bi bi-chevron-down "></i>             
            </div>       
            <input type="checkbox" className='dropdown__check' />
          </a>

          <div className="dropdown__content">
            <ul className="dropdown__sub">
              <li className="dropdown__li">                        
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