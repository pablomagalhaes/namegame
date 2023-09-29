import axios from 'axios'

const api = axios.create({
  baseURL: 'https://namegame.willowtreeapps.com/api/v1.0/profiles'
})

export default api;