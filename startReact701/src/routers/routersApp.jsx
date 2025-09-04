import { Route, Routes } from "react-router-dom"
import { Landign } from "../feature/landing/landign"
import { ServicesHome } from "../feature/landing/pages/servicesHome/serviceshOme"
import { ProductsHome } from "../feature/landing/pages/productsHome/productsHome"
import { Login } from "../feature/landing/pages/auth/login"
import { Register } from "../feature/landing/pages/auth/register"
import { Dashboard } from "../feature/dashboard/dashboard"
import { Productos } from "../feature/dashboard/productos/productos"
import { Servicios } from "../feature/dashboard/servicios/servicios"
import { Users } from "../feature/dashboard/users/users"

export const RouterApp = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={ <Landign/> } />
                <Route path="/servicesHome" element={ <ServicesHome/> } />
                <Route path="/productsHome" element={ <ProductsHome/> } />
                <Route path="/login" element={ <Login/> } />
                <Route path="/register" element={ <Register/> } />
              
                {/* Rutas para el dashboard */}
                <Route path="/dashboard" element={ <Dashboard/> } >
                    <Route path="users" element={ <Users/> } />
                    <Route path="productos" element={ <Productos/> } />
                    <Route path="servicios" element={ <Servicios/> } />

                </Route>


                

            </Routes>
        </>
    )
}