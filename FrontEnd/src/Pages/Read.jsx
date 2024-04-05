import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Read() {
    const {id} = useParams();
    const [usuarios, setUser] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8081/read/'+id)
        .then(res => {
          console.log(res)
          setUser(res.data[0]);
        })
        .catch(err => console.log(err))
    }, [])
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <div className='p-2'>
          <h2>Student Detail</h2>
          <h2>{usuarios.ID}</h2>
          <h2>{usuarios.Nombre}</h2>
          <h2>{usuarios.Apellido}</h2>
          <h2>{usuarios.Correo}</h2>
          <h2>{usuarios.Contraseña}</h2>
        </div>
        <Link to='/' className='btn btn-primary me-2'>Back</Link>
        <Link to='/' className='btn btn-info'>Edit</Link>
      </div>
      
    </div>
  )
}

export default Read