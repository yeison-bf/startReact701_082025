import React, { useState } from 'react'
import { Nabvar } from '../../components/nabvar'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export const Register = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    document: '',
    name: '',
    lastname: '',
    email: '',
    password: '',
  })

  const [showPassword, setShowPassword]=useState(false)
  const handdleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

  }

  const handdleSubtmi = (e) => {
    e.preventDefault()

    const listUser = JSON.parse(localStorage.getItem('users')) || []

    listUser.push(formData)
    localStorage.setItem('users', JSON.stringify(listUser))
    alert("Registro exitoso")

    setFormData({
      document: '',
      name: '',
      lastname: '',
      email: '',
      password: '',
    })

    navigate('/login')
  }


  const handdleValidator = (e) =>{
    const { value } = e.target
    const userExistin = JSON.parse(localStorage.getItem('users'))
    console.log(userExistin)

    if(value == userExistin.document){
      alert("Lo sentimos! este docuento ya está registrado")
      setFormData({document:''})
    }
  }

  return (
    <div className='container-fliuid'>
      <Nabvar />
      <div className='container'>
        <form onSubmit={handdleSubtmi} >
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Documento</label>
            <input name='document' value={formData.document} onChange={handdleChange} onBlur={handdleValidator} type="number" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Nombres</label>
            <input name='name' value={formData.name} onChange={handdleChange} type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Apellidos</label>
            <input name='lastname' value={formData.lastname} onChange={handdleChange} type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
            <input name='email' value={formData.email} onChange={handdleChange} type="email" className="form-control" />
          </div>
          <div className="mb-3">
            <div className="row">
              <div className="col-10">
                <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                <input name='password' value={formData.password} onChange={handdleChange} type={showPassword ? 'text' : 'password'} className="form-control" />
              </div>
              <div className="col-2">
                  <button type='button' onClick={()=>setShowPassword(!showPassword)} className='btn btn-success'> {showPassword ? ( <FaEye className='text-primary' />)  : (<FaEyeSlash />)}</button>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <input type="submit" value="Guardar" className="btn btn-primary" />
          </div>
        </form>
      </div>
    </div>
  )
}
