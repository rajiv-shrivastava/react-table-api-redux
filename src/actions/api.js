import axios from 'axios';
import {AUTH_TOKEN} from '../constants'


const makeHeaders = () => {
 if(AUTH_TOKEN !== null 
 	 && AUTH_TOKEN !== undefined 
 	 && AUTH_TOKEN.length > 0){
   return {
   	 'Authorization': "bearer " + AUTH_TOKEN
     }
  }
  else {
    return {}
  }
}

let config = {
  	headers: makeHeaders(),
  	withCredentials: false,
    baseURL: 'base url of api goes here............'
}

export default axios.create(config);