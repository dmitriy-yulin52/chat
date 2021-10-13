import axios from 'axios'


export const chatApi = {
    join(roomId){
        return axios.get(`/rooms/${roomId}`)
            .then((response)=>response.data)
    }
}