import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://cemes-08.herokuapp.com/'
})

export default instance
