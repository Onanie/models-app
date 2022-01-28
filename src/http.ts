import axios from "axios";
import * as constants from './constants'

export default axios.create({
  baseURL: constants.BASE_URL,
  withCredentials: false,
  headers: {
    "Content-type": "application/vnd.api+json",
    "Authorization": `TOKEN ${constants.API_KEY}`
  }
});