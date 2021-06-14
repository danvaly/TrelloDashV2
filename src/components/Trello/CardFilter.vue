<template>
  <div class="filter-container">
    <label>Card Filter</label>
    <input type="text" v-model="filter" @change="updateFilter" placeholder="Card Filter"/>
  </div>
</template>

<script>
export default {
  name: 'CardFilter',
  data () {
    return {
      filter: ''
    }
  },
  mounted () {
    if (localStorage.getItem('card_filter')) {
      this.filter = localStorage.getItem('card_filter')
    }
  },
  methods: {
    updateFilter () {
      localStorage.setItem('card_filter', this.filter)
      window.location.reload()
    }
  }
}
</script>
<style lang="scss">
.filter-container {
  padding: 5px;

  input {
    margin: 0!important;
  }
}
</style>
