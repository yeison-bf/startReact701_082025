import React, { useEffect, useState } from 'react'
import { UsersServices } from './services/users.services'


export const Users = () => {

    // Utilizamos el useEffect para ejecutar la función apenas llame al componente
    useEffect(() => {
        fetchUsers()
    }, [])

    // Creamos una constante global llamada listUsers de tipo useState([]) para almacenar los datos obtenidos en la petición
    const [listUsers, setListUsers] = useState([])

    const fetchUsers = async () => {
        try {
            const response = await UsersServices.getAllUsers()
            console.log(response.data)

            // Guardamos en la variable global, los datos obtenidos en la petición
            setListUsers(response.data)
        } catch (error) {

        }
    }

    return (
        <>
            <div className="mb-6">
                <h1 className="text-2xl font-semibold text-gray-800 mb-2">Usuarios</h1>
                <p className="text-gray-600">Listado general de usuarios del sistema</p>
            </div>

            {/* Content Area */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 min-h-96">
                <div className="p-6">
                    {/* Aquí se renderizará el contenido de las rutas hijas */}


                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">Item</th>
                                <th scope="col" class="px-6 py-3">Identificación</th>
                                <th scope="col" class="px-6 py-3">Nombres</th>
                                <th scope="col" class="px-6 py-3">Email</th>
                                <th scope="col" class="px-6 py-3">Estatus</th>
                                <th scope="col" class="px-6 py-3">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listUsers.map((element, index) => (
                                <tr key={index} class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                                    <td class="px-6 py-4">{(index+1)}</td>
                                    <td class="px-6 py-4">{element.documentType} : {element.documentNumber}</td>
                                    <td class="px-6 py-4">{element.firstName} {element.lastName}</td>
                                    <td class="px-6 py-4">{element.email}</td>
                                    <td class="px-6 py-4">{element.isActive ? (<mall className="text-black-600 p-1 bg-green-300 rounded ">Activo</mall>) : (<mall className="text-black-500 p-1 bg-red-500 rounded ">Inctivo</mall>)}</td>
                                    <td class="px-6 py-4"><a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a></td>
                                </tr>
                            ))}

                        </tbody>
                    </table>

                </div>
            </div>
        </>
    )
}
