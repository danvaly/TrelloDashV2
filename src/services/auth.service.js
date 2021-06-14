import $store from '../store'
import $router from '../router'

import { TrelloService } from '@/services/trello.service'

export class AuthService {
  /**
   ******************************
   * @API
   ******************************
   */
  static getLoginLink () {
    return process.env.VUE_APP_TRELLO_API_URL + 'connect?key=' + process.env.VUE_APP_TRELLO_API_KEY + '&name=' + process.env.VUE_APP_DOMAIN_TITLE + '&response_type=token&expiration=never&scope=read,write'
  }

  static authenticated () {
    return localStorage.getItem('trello_token') && localStorage.getItem('trello_user')
  }

  static async login (token) {
    localStorage.setItem('trello_token', token)
    const me = await TrelloService.me()
    localStorage.setItem('trello_user', JSON.stringify(me.data))
    $store.commit('user/SET_CURRENT_USER', me.data)
  }

  static init () {
    const me = JSON.parse(localStorage.getItem('trello_user'))
    $store.commit('user/SET_CURRENT_USER', me)
  }

  static async makeLogout () {
    _resetAuthData()
    $router.push({ name: 'login' }).catch(() => {
    })
    return {}
  }

  /**
   ******************************
   * @METHODS
   ******************************
   */
  static getToken () {
    return localStorage.getItem('trello_token')
  }
}

/**
 ******************************
 * @private_methods
 ******************************
 */
function _resetAuthData () {
  localStorage.clear()
  // reset userData in store
  $store.commit('user/SET_CURRENT_USER', {})
}
