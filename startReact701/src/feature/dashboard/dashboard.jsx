import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

export const Dashboard = () => {

  const navigate = useNavigate()

  const handdleLogout  = () =>{
    localStorage.clear()
    navigate('/login')
  }
  return (
    <div className='contenedorDashboard'>
      <div className="sidebar">
        <ul>
          <li><Link to="/dashboard/inicio">Inicio</Link></li>
          <li><Link to="/dashboard/productos">Productos</Link></li>
          <li><Link to="/dashboard/servicios">Servicios</Link></li>
          <li><a onClick={handdleLogout }>Salir</a></li>
        </ul>
      </div>
      <div className="contenido">
        <Outlet/>

      </div>

    </div>
  )
}
