import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Nabvar } from "../../components/nabvar";

export function Login() {

    const navigate = useNavigate()

    const [nombre, setNombre] = useState("")
    const [password, setPassword] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        const userStorage = JSON.parse(localStorage.getItem('users'))
        if (nombre == userStorage.email && password == userStorage.password) {
            navigate('/dashboard')
        } else {
            alert("Credenciales incorrectas")
        }
    }

    const handleNavigate = () => {
        navigate('/register')
    }


    return (
        <>
            <Nabvar />

            <h2>Formulario de registro deL estudiante {nombre}</h2>
            <form className="card p-3" onSubmit={handleSubmit} >
                <div>
                    <label>Usuario de acceso
                        <input onChange={(e) => setNombre(e.target.value)} className="form-control" type="email" name="nombre" />
                    </label>
                </div>
                <div>
                    <label>Password
                        <input onChange={(e) => setPassword(e.target.value)} className="form-control" type="password" />
                    </label>
                </div>
                <div className="pt-4">
                    <input type="submit" value="Guardar" />
                </div>
            </form>
            <p onClick={handleNavigate} >¿No tienes cuenta? Da clic aqui</p>
        </>
    )
}
