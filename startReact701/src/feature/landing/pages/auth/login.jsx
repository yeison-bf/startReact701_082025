import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Nabvar } from "../../components/nabvar";

export function Login() {

    const navigate = useNavigate()

    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        const userStorage = JSON.parse(localStorage.getItem('users'))
        let siExiste = false;
        userStorage.forEach(element => {
            if (username == element.email && password == element.password) {
                navigate('/dashboard/users')
                siExiste = true
            }
        });

        if (!siExiste) {
            alert("Credenciales incorrectas")
        }
    }

    const handleNavigate = () => {
        navigate('/register')
    }


    return (
        <>
            <Nabvar />

            <h2>Login</h2>
            <form className="card p-3" onSubmit={handleSubmit} >
                <div>
                    <label>Usuario de acceso
                        <input onChange={(e) => setUserName(e.target.value)} className="form-control" type="email" name="nombre" />
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
