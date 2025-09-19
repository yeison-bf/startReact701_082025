import axios from "axios"

const server = 'http://localhost:3000'


export const authServices = {

    async createList(data) {
        const Crear = await JSON.parse(localStorage.getItem("users")) || []
        Crear.push(data)
        localStorage.setItem("users", JSON.stringify(Crear))
        return { success: true }
    },

    async login(data) {
        try {
            const response = await axios.post(server+'/users/login', data )
            return response.data
        } catch (error) {
            console.error(error)
        }
    }

 
}