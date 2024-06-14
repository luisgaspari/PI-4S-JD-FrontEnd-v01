import axios from "axios"

const api = axios.create({
    // baseURL: 'https://api-workshop-8d2f.onrender.com'
    baseURL: 'http://localhost:3000'
})

export default api