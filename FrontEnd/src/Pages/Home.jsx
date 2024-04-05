import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Home(){
    const [data, setData] = useState([])
    useEffect(()=> {
        axios.get('http://localhost:8081/')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:8081/delete/'+id)
        .then(res => {
            location.reload();
        })
        .catch(err => console.log(err));
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <h2>Student list</h2>
                <div className='d-flex justify-content-end'>
                    <Link to="/create" className='btn btn-success'>Create +</Link>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>FIRST NAME</th>
                            <th>LAST NAME</th>
                            <th>EMAIL</th>
                            <th>PASSWORD</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((usuarios, index) =>{
                            return <tr key = {index}>
                                <td>{usuarios.ID}</td>
                                <td>{usuarios.Nombre}</td>
                                <td>{usuarios.Apellido}</td>
                                <td>{usuarios.Correo}</td>
                                <td>{usuarios.Contraseña}</td>
                                <td>
                                    <Link to={`/read/${usuarios.ID}`} className='btn btn-sm btn-info'>Read</Link>
                                    <button className='btn btn-sm btn-primary mx-2'>Edit</button>
                                    <button onClick={ () =>handleDelete(usuarios.ID)} className='btn btn-sm btn-danger'>Delete</button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Home