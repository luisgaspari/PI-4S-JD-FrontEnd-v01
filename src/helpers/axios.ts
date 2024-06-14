import axios from "axios"

const api = axios.create({
    baseURL: 'https://pi-4s-jd-backend-v01.onrender.com'
    // baseURL: 'http://localhost:3000'
})

export default api