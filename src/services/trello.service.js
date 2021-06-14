import { BaseService } from './base.service'

export class TrelloService extends BaseService {
  static get entity () {
    return 'cards'
  }

  static async me () {
    return this.getAsync({ auth: true }, '/members/me', true, false)
  }

  static async getMember (id) {
    return this.getAsync({ auth: true }, `/members/${id}`, true, false)
  }

  static async getBoard (id) {
    return this.getAsync({ auth: true }, `/boards/${id}`, true, false)
  }

  static async getOrganizationMembers (id) {
    return this.getAsync({ auth: true }, `/organizations/${id}/members`, true, false)
  }

  static async getMemberCards (id) {
    return this.getAsync({ auth: true }, `/members/${id}/cards`, true, false)
  }

  static async organizations (id) {
    return this.getAsync({ auth: true }, `/members/${id}/organizations`, true, false)
  }

  static async getOrganizationBoards (id) {
    return this.getAsync({ auth: true }, `/organizations/${id}/boards`, true, false)
  }

  static async getBoardLists (id) {
    return this.getAsync({ auth: true }, `/boards/${id}/lists`, true, false)
  }

  static async getBoardCards (id) {
    return this.getAsync({ auth: true }, `/boards/${id}/cards`, false)
  }

  static getListCards (id) {
    return this.getAsync({ auth: true }, `/lists/${id}/cards`, false)
  }
}
