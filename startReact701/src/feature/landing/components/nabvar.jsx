import React from 'react'
import { Link } from 'react-router-dom'

export const Nabvar = () => {
    return (
        <header>
            <nav>
                <img src="" alt="" />
                <ul>
                    <li><Link className='linkRoute' to="/">Inicio</Link></li>
                    <li><Link className='linkRoute' to="/productsHome">Productos</Link></li>
                    <li><Link className='linkRoute' to="/servicesHome">Servicios</Link></li>
                    {/* <li><Link className='linkRoute' to="/contacts">Contactos</Link></li> */}
                    <li><Link className='linkRoute' to="/login">Login</Link></li>
                </ul>
            </nav>
        </header>
    )
}
