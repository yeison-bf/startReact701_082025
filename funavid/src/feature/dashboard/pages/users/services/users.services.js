import axios from "axios"
const server = 'http://localhost:3000'

export const UsersServices = {

    async postUser(data) {
        try {
            const response = await axios.post(server + '/users', data)
            return response
        } catch (error) {
            console.error(error)
        }
    },

    async getAllUsers() {
        try {
            const data = await axios.get(server + '/users')
            return data.data
        } catch (error) {
            console.error(error)
        }
    },

    async updateUser(id, data) {
        try {
            const response = await axios.post(server + '/users' + id, data)
        } catch (error) {
            console.error(error)
        }
    },

    async deleteUser(id) {
        try {
            const response = await axios.delete(server + '/users/' + id)
            return response
        } catch (error) {
            console.error(error)
        }
    },


}