import axios, { AxiosError } from 'axios'
import { parseCookies } from 'nookies'
import { AuthTokenError } from './erros/AuthTokenError'

import { signOut } from '../contexts/AuthContext'

export function setUpAPIClient(ctx = undefined){
    let cookies = parseCookies(ctx);

    const api = axios.create({
        baseURL: 'http://localhost:3333',
        headers: {
            Authorization: `Bearer ${cookies['@nextauth.token']}`
        }
    })

    api.interceptors.response.use(response => {
        return response;
    }, (error: AxiosError) => {
        if(error.response.status === 401){
            //qualquer erro 401 (não autorizado) devemos deslogar
            if(typeof window !== undefined){
            //chamar função para deslogar
            signOut()
        } else {
            return Promise.reject(new AuthTokenError)
        }
      }

      return Promise.reject(error);

    })

    return api;

}