import axios from 'axios'

export default axios.create({
  baseURL: 'http://localhost:5000',
  headers:{
    'Content-type': 'application/json'
  }
})
export const axiosJWT= axios.interceptors.request.use(
  async (config) => {
    
  }
)