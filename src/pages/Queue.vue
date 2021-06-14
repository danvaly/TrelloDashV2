<template>
  <div>
    <div id="content" tabindex="-1">
      <div id="queue">
        <board-list :boards="boards" :with-cards="true"></board-list>
      </div>
    </div>
  </div>
</template>

<script>

import $store from '@/store'
import { TrelloService } from '@/services/trello.service'
// import Card from '@/components/Trello/Card'
import BoardList from '@/components/Trello/BoardList'

export default {
  name: 'Queue',
  data () {
    return {
      cards: [],
      boards: []
    }
  },
  components: {
    BoardList
  },
  mounted () {
    $store.subscribe((mutation, state) => {
      if (mutation.type === 'organizationFilter/SET_STATE' || mutation.type === 'organizationFilter/SET_CURRENT_FILTER') {
        this.loadMyCards()
      }
    })
    this.loadMyCards()
  },
  methods: {
    async loadMyCards () {
      this.cards = []
      const memberCards = await TrelloService.getMemberCards($store.state.user.currentUser.id)

      for (const i in memberCards.data) {
        const boardIndex = this.getBoardIndex(memberCards.data[i].idBoard)
        if (boardIndex > -1) {
          this.boards[boardIndex].cards.push(memberCards.data[i])
        } else {
          const boardData = await TrelloService.getBoard(memberCards.data[i].idBoard)
          boardData.data.cards = []
          boardData.data.cards.push(memberCards.data[i])

          this.boards.push(memberCards.data[i])
        }
      }
    },
    getBoardIndex (idBoard) {
      for (const i in this.boards) {
        if (this.boards[i].id === idBoard) {
          console.log('Index ' + i + ' ' + idBoard, i)
          return i
        }
      }
      console.log('Index ' + idBoard, -1)

      return -1
    }
  }

}
</script>

<style lang="scss">
#content {
  height: calc(100vh - 80px);
}
</style>
