import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://192.168.100.47:3333',
    responseType: 'json'
})