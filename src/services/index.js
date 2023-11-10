import axios from "axios"


const api = axios.create({
    baseURL:"https://kenziehub.herokuapp.com",
    timeoute: 5 * 1000,
})

export default api;