import axios from "axios"

export const InstitutionServices = {
    async getAllInstitution(){
        const response = await axios.get('http://localhost:3000/fundations')
        console.log(response)
        return response.data
    },
     async getAllRoles(){
        const response = await axios.get('http://localhost:3000/roles')
        console.log(response)
        return response.data
    },
     async getAllSubRoles(){
        const response = await axios.get('http://localhost:3000/sub-roles')
        console.log(response)
        return response.data
    },
     async getAllDepartament(){
        const response = await axios.get('http://localhost:3000/departaments')
        console.log(response)
        return response.data
    },
}