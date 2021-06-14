/**
 * HTTP request layer
 * if auth is required return patched axios instance(with access token in headers)
 * else return clear axios instance
 */

import axios from 'axios'

import { AuthService } from '@/services/auth.service'

export class Http {
  constructor (status) {
    this.isAuth = status && status.auth ? status.auth : false
    this.instance = axios.create({
      baseURL: process.env.VUE_APP_TRELLO_API_URL
    })

    return this.init()
  }

  init () {
    if (this.isAuth) {
      this.instance.interceptors.request.use(request => {
        request.params = {
          ...request.params,
          key: process.env.VUE_APP_TRELLO_API_KEY,
          token: AuthService.getToken()
        }
        return request
      }, error => {
        return Promise.reject(error)
      })
    }

    return this.instance
  }
}
