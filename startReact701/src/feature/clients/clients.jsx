import React, { useEffect, useState } from "react";

export function Clients() {

    let userName = "Eimmy@gmail.com"
    let passworsUser = "Hola1234"

    const [nombre, setNombre] = useState("")
    const [password, setPassword ] = useState("")


    const handleSubmit = () =>{
        console.log({nombre, password})
    }
    return (
        <>
            <h2>Formulario de registro deL estudiante {nombre}</h2>
            <form className="card p-3" onSubmit={handleSubmit} >
                <div>
                    <label>Usuario de acceso
                        <input onChange={ (e) => setNombre(e.target.value) } className="form-control" type="email" name="nombre" />
                    </label>
                </div>
                <div>
                    <label>Password
                        <input onChange={ (e) => setPassword(e.target.value) } className="form-control" type="password" />
                    </label>
                </div>
                <div className="pt-4">
                    <input type="submit" value="Guardar" />
                </div>
            </form>
        </>
    )
}
