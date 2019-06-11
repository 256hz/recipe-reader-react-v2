import * as axios from 'axios'

const Api = "http://localhost:3000/api/v1/"

export default const instance = axios.create({
  baseURL: Api,
  timeout: 1000,
  headers: {'Content-Type': 'application/json'}
});