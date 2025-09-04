import React, { useEffect, useState } from 'react'
import { UserServices } from './services/users.services'

export const Users = () => {

  // Hoosk de renderizado automatico
  useEffect(() => {
    fetchDataUsers()
  }, [])

  const [users, setUsers] = useState([])

  const fetchDataUsers = () => {
    const listUsers = UserServices.listUsers()
    console.log(listUsers)
    setUsers(listUsers)
  }



  return (
    <>

      <div>Bienvenido señor usuario</div>
      <div className="container mt-4">
        <table className='table bordered w-100'>
          <thead>
            <tr>
              <th>#</th>
              <th>Documento</th>
              <th>Nombre</th>
              <th>Apellidos</th>
              <th>Correo</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {users.map((element, index) => (
              <tr key={index}>
                <td>{(index+1)}</td>
                <td>{element.document}</td>
                <td>{element.name}</td>
                <td>{element.lastname}</td>
                <td>{element.email}</td>
                <td><button className='btn btn-primary'>Editar</button></td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </>
  )
}
