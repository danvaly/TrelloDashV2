<template>
  <div>
    <div class="board-wrapper body-card-label-text" style="padding-top:10px;">
      <div id="boardFilter-list">
        <ul class="list-items">
          <li v-if="hiddenBoards.length">
            <span class="list-title">Hidden boards</span>
          </li>
          <li v-for="board in hiddenBoards" :key="board.id">
            <a class="button primary" @click="showBoard(board.id)">
              <span class="icon-sm icon-close"></span>
              {{ board.name }}
            </a>
          </li>
        </ul>
      </div>
      <div class="board-main-content">
        <div class="board-canvas">
          <div id="board">
            <Board v-for="board in boards"
                   :key="board.id"
                   :board="board"
                   :with-cards="true"></Board>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Board from '@/components/Trello/Board'
import $store from '@/store'

export default {
  name: 'BoardList',
  components: {
    Board
  },
  data () {
    return {
      currentBoards: []
    }
  },
  props: {
    boards: Array,
    withCards: Boolean
  },
  computed: {
    hiddenBoards () {
      return this.boards.filter((board) => {
        if ($store.state.boardFilter.currentFilters && $store.state.boardFilter.currentFilters.includes(board.id)) {
          return board
        }
      })
    }
  },
  methods: {
    showBoard (id) {
      $store.commit('boardFilter/REMOVE_FILTER', id)
    }
  },
  mounted () {
    this.currentBoards = this.boards
    console.log('BOARDS', this.boards)
  }
}
</script>
