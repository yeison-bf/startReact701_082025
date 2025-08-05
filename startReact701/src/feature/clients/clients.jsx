import React, { useState } from "react";

export function Clients() {

    let userName = "Eimmy@gmail.com"
    let passworsUser = "Hola1234"

    const [nombre, setNombre] = useState("")
    const [apellidos, setApellidos ] = useState("")

    const handdleAccess = (e) =>{
        e.preventDefault()
        console.log({nombre, apellidos})
        if(nombre == userName && apellidos == passworsUser){
            alert("Felicidades! lograste aceder")
        }else{
            alert("Vea pirobo, pailas, error de acceso")
        }
    }

    return (
        <>
            <h2>Formulario de registro de estudiantes</h2>
            <form className="card p-3" onSubmit={handdleAccess}>
                <div>
                    <label>Usuario de acceso
                        <input onChange={ (e)=> setNombre(e.target.value) } className="form-control" type="email" name="nombre" />
                    </label>
                </div>
                <div>
                    <label>Password
                        <input onChange={ (e)=> setApellidos(e.target.value) } className="form-control" type="password" />
                    </label>
                </div>
                <div className="pt-4">
                    <input type="submit" value="Guardar" />
                </div>
            </form>
        </>
    )
}
