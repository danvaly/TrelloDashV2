<template>
  <div class="list-wrapper" v-if="cards.length">
    <div class="list" :style="style">
      <div class="list-header">
        <h2 class="list-header-name" dir="auto">
          <a @click="hideBoard" class="board-hide-button" title="Hide Board">
            <span class="icon-sm icon-subscribe"></span>
          </a>
          <a :href="board.url" target="trello"
             class="board-name" style="text-decoration: none; font-size: 16px;">
            {{ board.name }}
          </a>
        </h2></div>
      <div class="list-cards scrollbar">
        <Card v-for="card in cards" :key="card.id" :card="card"></Card>
      </div>
    </div>
  </div>
</template>
<script>
import { TrelloService } from '@/services/trello.service'
import Card from '@/components/Trello/Card'
import $store from '@/store'

export default {
  name: 'Board',
  components: {
    Card
  },
  data () {
    return {
      lists: [],
      cards: [],
      timer: null
    }
  },
  props: {
    board: Object,
    withCards: Boolean
  },
  computed: {
    style () {
      return {
        'background-color': this.board.prefs.backgroundColor
      }
    }
  },
  mounted () {
    // console.log('Current Board', this.board)
    $store.subscribe((mutation, state) => {
      if (mutation.type === 'boardFilter/ADD_FILTER' || mutation.type === 'boardFilter/REMOVE_FILTER') {
        this.startBoardTask()
      }
    })
    this.loadLists()
    this.startBoardTask()
  },
  methods: {
    startBoardTask () {
      clearInterval(this.timer)
      this.loadBoardCards()
      this.timer = setInterval(() => {
        this.loadBoardCards()
      }, 1000 * 60)
    },

    async loadBoardCards () {
      if (!$store.state.boardFilter.currentFilters.includes(this.board.id)) {
        const boardCards = await TrelloService.getBoardCards(this.board.id)

        const cardFilter = localStorage.getItem('card_filter') ? localStorage.getItem('card_filter').toLowerCase().split('|') : []
        const listFilter = localStorage.getItem('list_filter') ? localStorage.getItem('list_filter').toLowerCase().split('|') : []

        this.cards = boardCards.data.filter((card) => {
          if (!listFilter.includes(card.idList)) {
            if (cardFilter.length) {
              if (card.labels.length) {
                for (const index in card.labels) {
                  if (cardFilter.includes(card.labels[index].name.toLowerCase()) && card.name.toLowerCase() !== 'labels') {
                    card.list = this.lists[card.idList] || {}
                    return card
                  }
                }
              }
            } else {
              card.list = this.lists[card.idList] || {}
              return card
            }
          }
        })
      }
    },
    async loadLists () {
      this.lists = []
      if (!$store.state.boardFilter.currentFilters.includes(this.board.id)) {
        const response = await TrelloService.getBoardLists(this.board.id)
        response.data.forEach((list) => {
          this.lists[list.id] = list
        })
      }
    },
    hideBoard () {
      $store.commit('boardFilter/ADD_FILTER', this.board.id)
      this.cards = []
    }
  }
}
</script>
