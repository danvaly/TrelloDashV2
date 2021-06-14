<template>
  <div class="list-wrapper">
    <div class="list" :style="style">
      <div class="list-header">
        <h2 class="list-header-name" dir="auto">
          <a data-board-name="V2-Baltic" class="boardHide">
            <span class="icon-sm icon-subscribe"></span>
          </a>
          <a :href="board.url" target="trello"
             class="board-name" style="text-decoration: none; font-size: 16px;">
            {{ board.name }}
          </a>
        </h2></div>
      <div class="list-cards">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Board',
  props: {
    board: Object,
    cards: Array
  },
  computed: {
    style () {
      return {
        'background-color': this.board.prefs.backgroundColor,
        display: this.cards && this.cards.length ? '' : 'none'
      }
    }
  }
}
</script>
