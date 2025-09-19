import axios from "axios"

const server = 'http://localhost:3000'

export const UsersServices = {

    async getAllUsers() {
        try {
            const data = await axios.get(server + '/users')
            return data.data
        } catch (error) {
            console.error(error)
        }
    },

}