

export const UserServices = {
    listUsers(){
        const dataUsers = JSON.parse(localStorage.getItem('users'))
        return dataUsers;
    },

    deleteUsers(id){
            
    },

    updateUsers(id, data){
            
    },

    createUsers(data){
            
    }
}