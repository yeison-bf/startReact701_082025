import { useEffect, useState } from 'react';
import { InstitutionServices } from '../../institution/profession.services';
import { UsersServices } from '../services/users.services';

export default function UserForm() {

  const [formData, setFormData] = useState({
    documentType: 'CC',
    documentNumber: '',
    firstName: '',
    lastName: '',
    gender: 'MALE',
    address: '',
    email: '',
    password: '',
    profession: '',
    birthDate: '',
    phone: '',
    foundationId: '',
    departmentId: '',
    roleIds: '',
    subroleIds: ''
  });


  // Variable global para roles
  const [Institution, SetInstitution] = useState([])
  const [roles, SetRoles] = useState([])
  const [Subroles, SetSubRoles] = useState([])
  const [Departaments, SetDepartaments] = useState([])

  useEffect(() => {
    fetDataInstitution()
    fetRole()
    fetSubRole()
    fetDepartament()
  }, [])

  const fetDataInstitution = async () => {
    try {
      const response = await InstitutionServices.getAllInstitution()
      console.log("- ", response)
      SetInstitution(response.data)
    } catch (error) {
      console.error(error)
    }
  }
  const fetRole = async () => {
    try {
      const response = await InstitutionServices.getAllRoles()
      console.log("- ", response)
      SetRoles(response.data)
    } catch (error) {
      console.error(error)
    }
  }
  const fetSubRole = async () => {
    try {
      const response = await InstitutionServices.getAllSubRoles()
      console.log("- ", response)
      SetSubRoles(response.data)
    } catch (error) {
      console.error(error)
    }
  }
  const fetDepartament = async () => {
    try {
      const response = await InstitutionServices.getAllDepartament()
      console.log("- ", response)
      SetDepartaments(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    formData.roleIds=[Number(formData.roleIds)]
    formData.subroleIds=[Number(formData.subroleIds)]
    formData.foundationId=Number(formData.foundationId)
    formData.departmentId=Number(formData.departmentId)


    const response = await UsersServices.postUser(formData)
    console.log(response)
    console.log('Datos del formulario:', formData);
    alert('Formulario enviado! Revisa la consola para ver los datos.');
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Registro de Usuario
      </h2>

      <div className="space-y-4">
        {/* Documento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tipo de Documento
            </label>
            <select
              name="documentType"
              value={formData.documentType}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="CC">Cédula de Ciudadanía</option>
              <option value="TI">Tarjeta de Identidad</option>
              <option value="CE">Cédula de Extranjería</option>
              <option value="PP">Pasaporte</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Número de Documento
            </label>
            <input
              type="text"
              name="documentNumber"
              value={formData.documentNumber}
              onChange={handleChange}
              placeholder="1234567890"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        {/* Nombres */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nombres
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Yeison"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Apellidos
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Barrios Funieles"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        {/* Género y Fecha de Nacimiento */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Género
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="MALE">Masculino</option>
              <option value="FEMALE">Femenino</option>
              <option value="OTHER">Otro</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Fecha de Nacimiento
            </label>
            <input
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        {/* Dirección */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Dirección
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Calle 123 #45-67"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Email y Teléfono */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Correo Electrónico
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="yeison@gmail.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Teléfono
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="3001234567"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        {/* Contraseña y Profesión */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Profesión
            </label>
            <input
              type="text"
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        {/* IDs (simplificados como números) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Fundación ID
            </label>
            <select
              name="foundationId"
              value={formData.foundationId}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option selected>Seleccione</option>
              {Institution.map((element) => (
                <option value={element.id}>{element.businessName}</option>
              ))}

            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Departamento ID
            </label>
            <select
              name="departmentId"
              value={formData.departmentId}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option selected>Seleccione</option>
              {Departaments.map((element) => (
                <option value={element.id}>{element.name}</option>
              ))}
            </select>
          </div>
           <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Role
            </label>
            <select
              name="roleIds"
              value={formData.roleIds}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option selected>Seleccione</option>
              {roles.map((element) => (
                <option value={element.id}>{element.name}</option>
              ))}
            </select>
          </div>
           <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Sub Role
            </label>
            <select
              name="subroleIds"
              value={formData.subroleIds}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option selected>Seleccione</option>
              {Subroles.map((element) => (
                <option value={element.id}>{element.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Botón de envío */}
        <div className="pt-4">
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
          >
            Registrar Usuario
          </button>
        </div>
      </div>
    </div>
  );
}